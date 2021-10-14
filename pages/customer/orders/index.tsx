import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../../services/api';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartIcon from '../../../components/CartIcon';
import OrdersCard from '../../../components/OrdersCard';
import LoadingMessage from '../../../components/LoadingMessage';

import { Section, BoxCard, Message } from '../../../styles/customer/orders';

import { useNavigation } from '../../../contexts/NavigationContext';

const Orders: React.FC = () => {
	const { setNavigationState } = useNavigation();

	const [orders, setOrders] = useState([]);

	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		setNavigationState({
			home: false,
			search: false,
			orders: true,
			profile: false,
		});
		getOrders();
	}, []);

	const getOrders = async () => {
		try {
			const { data } = await api.get(
				`/api/orders/customer/${JSON.parse(localStorage.getItem('userData'))._id}`,
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
			);
			console.log(data);
			setOrders(data);
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
						<CartIcon />
					</div>
					{isFetching ? (
						<BoxCard>
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
										<Message>Nenhum endereço cadastrado!</Message>
									) : (
										orders.map((order, index) => (
											<OrdersCard
												key={order._id}
												orderId={order._id}
												imageSrc={order.imageStore}
												storeName={order.tradingNameStore}
												status={order.statusOrder}
												time={order.dateOrder}
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
