import React, { useState, useEffect } from 'react';
import router, { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import api from '../../../services/api';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import OrderCard from '../../../components/OrderCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import LoadingMessage from '../../../components/LoadingMessage';

import {
	Section,
	DetailsCard,
	BoxCard,
	Text,
	Store,
	Name,
	Status,
	Description,
	Span,
	Date,
	FinishCard,
	Info,
	CancelCard,
	Message,
} from '../../../styles/customer/order';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

interface ICustomer {
	nameCustomer: string;
	phoneCustomer: string;
}

interface IStore {
	tradingNameStore: string;
	phoneStore: string;
	imageStore: string;
}

interface IProduct {
	_id: string;
	idStore: string;
	categoryProduct: string;
	descriptionProduct: string;
	compositionProduct: string;
	imageProduct: string;
	priceProduct: number;
	availabilityProduct: boolean;
	registrationDateProduct: string;
	quantity: number;
	storeName: string;
}

interface IAddressCustomer {
	_id: string;
	streetNameCustomer: string;
	streetNumberCustomer: string;
	complementCustomer: string;
	neighborhoodCustomer: string;
	cityCustomer: string;
	stateCustomer: string;
	mainAddressCustomer: boolean;
	idCustomer: string;
}

interface IPayment {
	_id: string;
	cardNumberCustomers: string;
	cardOwnerCpfCustomer: string;
	cardOwnerNameCustomer: string;
	cardTypeCustomers: string;
	finalNumber: string;
	idCustomer: string;
	processor: string;
	mainCardCustomer: boolean;
}

interface IOrder {
	_id: string;
	idCustomer: string;
	idStore: string;
	dateOrder: string;
	deliveryFeeOrder: number;
	deliveryEstimatedOrder: number;
	statusOrder: string;
	subTotalOrder: number;
	totalOrder: number;
	orderProducts: IProduct[];
	customer: ICustomer;
	addressCustomer: IAddressCustomer[];
	store: IStore;
	addressStore: [];
	paymentOrder: IPayment[];
}

const Order: React.FC = () => {
	const { setNavigationState } = useNavigation();

	const { query } = useRouter();

	const [order, setOrder] = useState<IOrder>({
		_id: '',
		idCustomer: '',
		idStore: '',
		dateOrder: '2021-10-16T16:11:17.837Z',
		deliveryFeeOrder: 0,
		deliveryEstimatedOrder: 0,
		statusOrder: '',
		subTotalOrder: 0,
		totalOrder: 0,
		orderProducts: [],
		customer: {
			nameCustomer: '',
			phoneCustomer: '',
		},
		addressCustomer: [
			{
				_id: '',
				streetNameCustomer: '',
				streetNumberCustomer: '',
				complementCustomer: '',
				neighborhoodCustomer: '',
				cityCustomer: '',
				stateCustomer: '',
				mainAddressCustomer: false,
				idCustomer: '',
			},
		],
		store: {
			tradingNameStore: '',
			phoneStore: '',
			imageStore: '',
		},
		addressStore: [],
		paymentOrder: [
			{
				_id: '',
				cardNumberCustomers: '',
				cardOwnerCpfCustomer: '',
				cardOwnerNameCustomer: '',
				cardTypeCustomers: '',
				finalNumber: '',
				idCustomer: '',
				processor: '',
				mainCardCustomer: true,
			},
		],
	});

	const [isFetching, setIsFetching] = useState(true);
	const [isCanceling, setIsCanceling] = useState(false);

	const [isCancelMenuVisible, setIsCancelMenuVisible] = useState(false);
	const [isMessageVisible, setIsMessageVisible] = useState(false);

	useEffect(() => {
		setNavigationState({
			home: false,
			search: false,
			orders: true,
			profile: false,
		});
		getOrder();
		return () => {
			setOrder({
				_id: '',
				idCustomer: '',
				idStore: '',
				dateOrder: '2021-10-16T16:11:17.837Z',
				deliveryFeeOrder: 0,
				deliveryEstimatedOrder: 0,
				statusOrder: '',
				subTotalOrder: 0,
				totalOrder: 0,
				orderProducts: [],
				customer: {
					nameCustomer: '',
					phoneCustomer: '',
				},
				addressCustomer: [
					{
						_id: '',
						streetNameCustomer: '',
						streetNumberCustomer: '',
						complementCustomer: '',
						neighborhoodCustomer: '',
						cityCustomer: '',
						stateCustomer: '',
						mainAddressCustomer: false,
						idCustomer: '',
					},
				],
				store: {
					tradingNameStore: '',
					phoneStore: '',
					imageStore: '',
				},
				addressStore: [],
				paymentOrder: [
					{
						_id: '',
						cardNumberCustomers: '',
						cardOwnerCpfCustomer: '',
						cardOwnerNameCustomer: '',
						cardTypeCustomers: '',
						finalNumber: '',
						idCustomer: '',
						processor: '',
						mainCardCustomer: true,
					},
				],
			});
		};
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			getOrder();
		}, 10000);
		return () => clearInterval(interval);
	}, []);

	const getOrder = async () => {
		try {
			const { data } = await api.get(`/api/orders/${query.orderId}`, {
				headers: {
					authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
				},
			});
			setOrder(data);
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCancel = async () => {
		setIsCanceling(true);
		try {
			await api.patch(
				`/api/change/orders/status/${order._id}`,
				{ statusOrder: 'canceled' },
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
			);
			setIsCanceling(false);
			setIsMessageVisible(true);
			setIsFetching(true);
			getOrder();
		} catch (error) {
			console.log(error);
		}

		setTimeout(() => {
			setIsCancelMenuVisible(false);
			setIsMessageVisible(false);
		}, 2000);
	};

	return (
		<Container>
			<>
				{!isCancelMenuVisible ? (
					<motion.div
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<Section>
							<TitleBox title='Detalhes do Pedido' />
							<ButtonsContainer>
								<>
									<Button
										className='icon back'
										color={Theme.colors.black}
										backgroundColor={Theme.colors.white}
										onClick={() => router.back()}
									>
										<svg
											className='icon'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
												clipRule='evenodd'
											/>
										</svg>
										Voltar
									</Button>
								</>
							</ButtonsContainer>
							{isFetching ? (
								<BoxCard style={{ backgroundColor: '#fff' }}>
									<LoadingMessage />
								</BoxCard>
							) : (
								<>
									<DetailsCard>
										<Text>
											<Store>
												<img
													src={order.store.imageStore}
													alt={order.store.tradingNameStore}
												/>
												<Name>{order.store.tradingNameStore}</Name>
											</Store>
											<Status>
												<Description>
													{`Estimativa de entrega: ${order.deliveryEstimatedOrder} min`}
												</Description>
											</Status>
											<Status>
												<Description>
													Status:
													{order.statusOrder === 'pendingAcceptance' && (
														<Span className='pending-acceptance'>
															<svg
																fill='none'
																stroke='#b1b102'
																viewBox='0 0 24 24'
																xmlns='http://www.w3.org/2000/svg'
															>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	strokeWidth={2}
																	d='M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
																/>
															</svg>
															Aguardando Aceitação
														</Span>
													)}
													{order.statusOrder === 'inProgress' && (
														<Span className='in-progress'>
															<svg
																fill='none'
																stroke='#212121'
																viewBox='0 0 24 24'
																xmlns='http://www.w3.org/2000/svg'
															>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	strokeWidth='2'
																	d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
																/>
															</svg>
															Em andamento
														</Span>
													)}
													{order.statusOrder === 'finished' && (
														<Span className='finished'>
															<svg
																fill='none'
																stroke='#00c2b2'
																viewBox='0 0 24 24'
																xmlns='http://www.w3.org/2000/svg'
															>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	strokeWidth='2'
																	d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
																/>
															</svg>
															Concluído
														</Span>
													)}
													{order.statusOrder === 'canceled' && (
														<Span className='canceled'>
															<svg
																fill='none'
																stroke='#e70101'
																viewBox='0 0 24 24'
																xmlns='http://www.w3.org/2000/svg'
															>
																<path
																	strokeLinecap='round'
																	strokeLinejoin='round'
																	strokeWidth='2'
																	d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
																/>
															</svg>
															Cancelado
														</Span>
													)}
												</Description>
											</Status>
											<Date>
												{format(
													parseISO(order.dateOrder),
													'iiiiii, dd MMM yy - HH:mm',
													{ locale: ptBR }
												)}
											</Date>
										</Text>
									</DetailsCard>
									<BoxCard>
										{order.orderProducts.map((product: IProduct) => (
											<OrderCard
												key={product._id}
												quantity={product.quantity}
												description={product.descriptionProduct}
												composition={product.compositionProduct}
												price={product.priceProduct}
												src={product.imageProduct}
											/>
										))}
									</BoxCard>
									<BoxCard>
										<FinishCard>
											<div className='total'>
												<span>Subtotal:</span>
												<span className='info'>
													{`R$ ${order.subTotalOrder
														.toFixed(2)
														.replace('.', ',')}`}
												</span>
											</div>
											<div className='total'>
												<span>Taxa de entrega:</span>
												<span className='info'>
													{`R$ ${order.deliveryFeeOrder
														.toFixed(2)
														.replace('.', ',')}`}
												</span>
											</div>
											<div className='total'>
												<span>Total:</span>
												<span>
													{`R$ ${order.totalOrder
														.toFixed(2)
														.replace('.', ',')}`}
												</span>
											</div>
										</FinishCard>
										<FinishCard>
											<Info>
												<span>Entregar em:</span>
												<span className='info'>
													{`${
														order.addressCustomer[0].streetNameCustomer
													}, Nº ${
														order.addressCustomer[0]
															.streetNumberCustomer
													}, ${
														order.addressCustomer[0]
															.complementCustomer &&
														order.addressCustomer[0]
															.complementCustomer + ', '
													}${
														order.addressCustomer[0]
															.neighborhoodCustomer
													}, ${order.addressCustomer[0].cityCustomer} - ${
														order.addressCustomer[0].stateCustomer
													}`}
												</span>
											</Info>
										</FinishCard>
										<FinishCard>
											<Info>
												<span>Forma de Pagamento:</span>
												<span className='info'>
													{`${order.paymentOrder[0].cardTypeCustomers} - ${order.paymentOrder[0].processor} (final ${order.paymentOrder[0].finalNumber})`}
												</span>
											</Info>
										</FinishCard>
										{(order.statusOrder === 'inProgress' ||
											order.statusOrder === 'pendingAcceptance') && (
											<FinishCard>
												<Button
													className='icon margin right'
													width='100%'
													height='50px'
													color={Theme.colors.white}
													backgroundColor={Theme.colors.red}
													onClick={() => setIsCancelMenuVisible(true)}
												>
													<div>
														<span>
															<svg
																fill='currentColor'
																viewBox='0 0 20 20'
																xmlns='http://www.w3.org/2000/svg'
																style={{
																	marginRight: '0.2rem',
																	marginBottom: '0.1rem',
																}}
															>
																<path
																	fillRule='evenodd'
																	d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
																	clipRule='evenodd'
																/>
															</svg>
															Cancelar pedido
														</span>
													</div>
												</Button>
											</FinishCard>
										)}
									</BoxCard>
								</>
							)}
						</Section>
					</motion.div>
				) : (
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<Section>
								<TitleBox title='Cancelar Pedido' />
								<CancelCard>
									<span>Deseja realmente cancelar o pedido?</span>
									<div className='buttons'>
										<Button
											className='icon back'
											width='10rem'
											color={Theme.colors.black}
											backgroundColor={Theme.colors.gray}
											onClick={() => setIsCancelMenuVisible(false)}
										>
											<svg
												className='icon'
												fill='currentColor'
												viewBox='0 0 20 20'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													fillRule='evenodd'
													d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
													clipRule='evenodd'
												/>
											</svg>
											Voltar
										</Button>
										<Button
											className='icon margin'
											width='10rem'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.red}
											onClick={handleCancel}
											isLoading={isCanceling}
										>
											{isCanceling ? (
												'Cancelando...'
											) : (
												<>
													<svg
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
														style={{
															marginRight: '0.2rem',
															marginBottom: '0.1rem',
														}}
													>
														<path
															fillRule='evenodd'
															d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
															clipRule='evenodd'
														/>
													</svg>
													Cancelar
												</>
											)}
										</Button>
									</div>
								</CancelCard>
								<AnimatePresence>
									{isMessageVisible && (
										<motion.div
											initial={{ opacity: 0 }}
											exit={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
										>
											<Message>Pedido cancelado!</Message>
										</motion.div>
									)}
								</AnimatePresence>
							</Section>
						</motion.div>
					</AnimatePresence>
				)}
			</>
		</Container>
	);
};

export default Order;
