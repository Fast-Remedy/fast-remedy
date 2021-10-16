import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../../services/api';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import StoreOrdersCard from '../../../components/StoreOrdersCard';
import LoadingMessage from '../../../components/LoadingMessage';

import { Section, BoxCard, Message } from '../../../styles/store/orders';

import { useNavigation } from '../../../contexts/NavigationContext';

const Orders: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	const [orders, setOrders] = useState([]);

	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: true,
			catalog: false,
			profile: false,
		});
		getOrders();
		return () => {
			setOrders([]);
		};
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
			const orders = data.sort((a, b) =>
				b.dateOrder > a.dateOrder ? 1 : a.dateOrder > b.dateOrder ? -1 : 0
			);
			setOrders(orders);
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
						<TitleBox title='Pedidos' />
					</div>
					{isFetching ? (
						<BoxCard style={{ backgroundColor: '#fff' }}>
							<LoadingMessage />
						</BoxCard>
					) : (
						<BoxCard style={{ marginTop: '0' }}>
							<motion.div
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<BoxCard>
									{orders.length === 0 ? (
										<Message>Nenhum pedido realizado!</Message>
									) : (
										orders.map(order => (
											<StoreOrdersCard
												key={order._id}
												orderId={order._id}
												customerName={order.nameCustomer}
												customerAddress={order.addressCustomer}
												status={order.statusOrder}
												time={order.dateOrder}
												total={order.totalOrder}
												items={order.orderProducts}
											/>
										))
									)}
								</BoxCard>
							</motion.div>
						</BoxCard>
					)}
				</Section>
			</>
		</Container>
	);
};

export default Orders;
