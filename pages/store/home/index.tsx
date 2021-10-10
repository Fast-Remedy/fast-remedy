import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import StoreNewOrderCard from '../../../components/StoreNewOrderCard';

import {
	Section,
	BoxCard,
	Greeting,
	InfoCard,
	InfoBox,
	Info,
	NewOrders,
	NewOrdersCard,
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

	useEffect(() => {
		setStoreNavigationState({
			home: true,
			orders: false,
			catalog: false,
			profile: false,
		});
		setStore(JSON.parse(localStorage.getItem('storeData')));
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
					<BoxCard>
						<InfoCard>
							<h1>Hoje</h1>
							<InfoBox>
								<Info>
									<span>Pedidos em andamento:</span>
									<span>11</span>
								</Info>
								<Info>
									<span>Pedidos concluídos:</span>
									<span>57</span>
								</Info>
								<Info>
									<span>Total vendido:</span>
									<span>R$ 753,34</span>
								</Info>
							</InfoBox>
						</InfoCard>
						<InfoCard>
							<h1>Total</h1>
							<InfoBox>
								<Info>
									<span>Pedidos concluídos:</span>
									<span>1346</span>
								</Info>
								<Info>
									<span>Clientes atendidos:</span>
									<span>642</span>
								</Info>
								<Info>
									<span>Total vendido:</span>
									<span>R$ 75.453,34</span>
								</Info>
							</InfoBox>
						</InfoCard>
					</BoxCard>
					<NewOrders>
						<NewOrdersCard>
							<h1>Você possui novos pedidos!</h1>
							<StoreNewOrderCard
								orderId='1'
								customerName='Antônio Silva de Abreu Rodrigues Paulino'
								customerAddress='Retiro, Volta Redonda - RJ'
								items={2}
								time='Quarta-feira, 11/08/2021 às 19h41'
							/>
							<StoreNewOrderCard
								orderId='2'
								customerName='Ricardo Souza da Costa Santos'
								customerAddress='Retiro, Volta Redonda - RJ'
								items={1}
								time='Quarta-feira, 11/08/2021 às 19h41'
							/>
						</NewOrdersCard>
					</NewOrders>
				</Section>
			</>
		</Container>
	);
};

export default Home;
