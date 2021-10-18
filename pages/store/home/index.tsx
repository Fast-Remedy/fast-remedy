import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import StoreNewOrderCard from '../../../components/StoreNewOrderCard';
import LoadingMessage from '../../../components/LoadingMessage';

import {
	Section,
	BoxCard,
	Greeting,
	InfoCard,
	InfoBox,
	Info,
	NewOrders,
	NewOrdersCard,
	Message,
} from '../../../styles/store/home';

import { useNavigation } from '../../../contexts/NavigationContext';

interface IStore {
	_id: string;
	cnpjStore: string;
	emailStore: string;
	companyNameStore: string;
	tradingNameStore: string;
	phoneStore: string;
	imageStore: string;
	deliveryMode: string;
	deliveryFeeStore: number;
	deliveryEstimatedTimeStore: string;
	bankNumber: string;
	agencyNumber: string;
	accountNumber: string;
	verifyingDigit: string;
	registrationDateStore: string;
}

const Home: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	const [timeNow, setTimeNow] = useState(new Date().getHours());
	const [store, setStore] = useState<IStore>({
		_id: '',
		cnpjStore: '',
		emailStore: '',
		companyNameStore: '',
		tradingNameStore: '',
		phoneStore: '',
		imageStore: '',
		deliveryMode: '',
		deliveryFeeStore: 0,
		deliveryEstimatedTimeStore: '',
		bankNumber: '',
		agencyNumber: '',
		accountNumber: '',
		verifyingDigit: '',
		registrationDateStore: '',
	});
	const [storeName, setStoreName] = useState('');
	const [newOrders, setNewOrders] = useState([]);
	const [ordersInProgress, setOrdersInProgress] = useState([]);
	const [finishedOrders, setFinishedOrders] = useState(0);

	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		setStoreNavigationState({
			home: true,
			orders: false,
			catalog: false,
			profile: false,
		});
		setStore(JSON.parse(localStorage.getItem('storeData')));
		getOrders();
	}, []);

	useEffect(() => {
		setStoreName(store?.tradingNameStore);
	}, [store]);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeNow(new Date().getHours());
		}, 60000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			getOrders();
		}, 10000);
		return () => clearInterval(interval);
	}, []);

	const getOrders = async () => {
		try {
			const { data } = await api.get(
				`/api/orders/store/${JSON.parse(localStorage.getItem('storeData'))._id}`,
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('storeToken'))}`,
					},
				}
			);
			const newOrders = data
				.filter(order => order.statusOrder === 'pendingAcceptance')
				.sort((a, b) =>
					b.dateOrder > a.dateOrder ? 1 : a.dateOrder > b.dateOrder ? -1 : 0
				);
			const ordersInProgress = data
				.filter(order => order.statusOrder === 'inProgress')
				.sort((a, b) =>
					b.dateOrder > a.dateOrder ? 1 : a.dateOrder > b.dateOrder ? -1 : 0
				);
			const finishedOrders = data.filter(order => {
				return (
					order.statusOrder === 'finished' &&
					order.dateOrder.split('-')[2].split('T')[0] === new Date().getDate().toString()
				);
			});
			setNewOrders(newOrders);
			setOrdersInProgress(ordersInProgress);
			setFinishedOrders(finishedOrders.length);
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			<>
				<Section>
					<div className='title'>
						<TitleBox title='Resumo' />
					</div>
					<Greeting>
						{timeNow >= 0 && timeNow <= 4 && 'Boa noite'}
						{timeNow >= 5 && timeNow <= 11 && 'Bom dia'}
						{timeNow >= 12 && timeNow <= 17 && 'Boa tarde'}
						{timeNow >= 18 && timeNow <= 24 && 'Boa noite'}, {storeName}!
					</Greeting>
					{isFetching ? (
						<BoxCard
							style={{
								backgroundColor: '#fff',
							}}
						>
							<LoadingMessage />
						</BoxCard>
					) : (
						<>
							<BoxCard>
								<InfoCard>
									<h1>Hoje</h1>
									<InfoBox>
										<Info>
											<span>Novos pedidos:</span>
											<span>{newOrders.length}</span>
										</Info>
										<Info>
											<span>Pedidos em andamento:</span>
											<span>{ordersInProgress.length}</span>
										</Info>
										<Info>
											<span>Pedidos concluídos:</span>
											<span>{finishedOrders}</span>
										</Info>
									</InfoBox>
								</InfoCard>
							</BoxCard>
							<NewOrders style={{ marginBottom: '1rem' }}>
								{newOrders.length === 0 ? (
									<BoxCard
										style={{
											backgroundColor: '#fff',
											margin: 0,
										}}
									>
										<Message style={{ marginTop: 0 }}>
											Nenhum novo pedido!
										</Message>
									</BoxCard>
								) : (
									<NewOrdersCard>
										<h1>Você possui novos pedidos!</h1>
										{newOrders.map(order => (
											<StoreNewOrderCard
												key={order._id}
												orderId={order._id}
												customerName={order.nameCustomer}
												customerAddress={order.addressCustomer}
												items={order.orderProducts}
												time={order.dateOrder}
											/>
										))}
									</NewOrdersCard>
								)}
							</NewOrders>
							<NewOrders>
								{ordersInProgress.length === 0 ? (
									<BoxCard
										style={{
											backgroundColor: '#fff',
											margin: 0,
										}}
									>
										<Message style={{ marginTop: 0 }}>
											Nenhum pedido em andamento!
										</Message>
									</BoxCard>
								) : (
									<NewOrdersCard>
										<h1>Pedidos em andamento</h1>
										{ordersInProgress.map(order => (
											<StoreNewOrderCard
												key={order._id}
												orderId={order._id}
												customerName={order.nameCustomer}
												customerAddress={order.addressCustomer}
												items={order.orderProducts}
												time={order.dateOrder}
											/>
										))}
									</NewOrdersCard>
								)}
							</NewOrders>
						</>
					)}
				</Section>
			</>
		</Container>
	);
};

export default Home;
