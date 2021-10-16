import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import api from '../../../services/api';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartCard from '../../../components/CartCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import LoadingMessage from '../../../components/LoadingMessage';

import {
	Section,
	BoxCard,
	FinishCard,
	Message,
	IncorrectMessage,
} from '../../../styles/customer/cart';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

interface ICartItems {
	_id: string;
	idStore: string;
	categoryProduct: string;
	descriptionProduct: string;
	compositionProduct: string;
	imageProduct: string;
	priceProduct: number;
	availabilityProduct: boolean;
	registrationDateProduct: string;
	storeName: string;
	quantity: number;
}

interface IStore {
	_id: string;
	tradingNameStore: string;
	deliveryFeeStore: number;
	deliveryEstimatedTimeStore: number;
}

interface IAddress {
	_id: string;
	idCustomer: string;
	streetNameCustomer: string;
	streetNumberCustomer: string;
	complementCustomer: string;
	neighborhoodCustomer: string;
	stateCustomer: string;
	cityCustomer: string;
	mainAddressCustomer: boolean;
}

interface ICard {
	_id: string;
	idCustomer: string;
	cardTypeCustomers: string;
	cardNumberCustomers: string;
	cardExpirationDateCustomers: string;
	cardCvvCustomer: string;
	cardOwnerNameCustomer: string;
	cardOwnerCpfCustomer: string;
	mainCardCustomer: boolean;
	finalNumber: string;
	processor: string;
}

const Cart: React.FC = () => {
	const { setNavigationState } = useNavigation();

	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [store, setStore] = useState<IStore>({
		_id: '',
		tradingNameStore: '',
		deliveryFeeStore: 0,
		deliveryEstimatedTimeStore: 0,
	});
	const [address, setAddress] = useState<IAddress>({
		_id: '',
		idCustomer: '',
		streetNameCustomer: '',
		streetNumberCustomer: '',
		complementCustomer: '',
		neighborhoodCustomer: '',
		stateCustomer: '',
		cityCustomer: '',
		mainAddressCustomer: true,
	});
	const [card, setCard] = useState<ICard>({
		_id: '',
		idCustomer: '',
		cardTypeCustomers: '',
		cardNumberCustomers: '',
		cardExpirationDateCustomers: '',
		cardCvvCustomer: '',
		cardOwnerNameCustomer: '',
		cardOwnerCpfCustomer: '',
		mainCardCustomer: true,
		finalNumber: '',
		processor: '',
	});
	const [cartItems, setCartItems] = useState<ICartItems[]>([]);
	const [subtotal, setSubtotal] = useState(0);
	const [total, setTotal] = useState(0);

	const [isFetching, setIsFetching] = useState(true);
	const [isBuying, setIsBuying] = useState(false);

	useEffect(() => {
		setNavigationState({
			home: true,
			search: false,
			orders: false,
			profile: false,
		});
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		setCartItems(cart);
		if (cart.length > 0) {
			getStore(cart[0].idStore);
		} else {
			setIsFetching(false);
		}
		getAddress();
		getCard();
		return () => {
			setStore({
				_id: '',
				tradingNameStore: '',
				deliveryFeeStore: 0,
				deliveryEstimatedTimeStore: 0,
			});
			setAddress({
				_id: '',
				idCustomer: '',
				streetNameCustomer: '',
				streetNumberCustomer: '',
				complementCustomer: '',
				neighborhoodCustomer: '',
				stateCustomer: '',
				cityCustomer: '',
				mainAddressCustomer: true,
			});
			setCard({
				_id: '',
				idCustomer: '',
				cardTypeCustomers: '',
				cardNumberCustomers: '',
				cardExpirationDateCustomers: '',
				cardCvvCustomer: '',
				cardOwnerNameCustomer: '',
				cardOwnerCpfCustomer: '',
				mainCardCustomer: true,
				finalNumber: '',
				processor: '',
			});
		};
	}, []);

	const getStore = async (idStore: string) => {
		try {
			const { data } = await api.get(`/api/stores/${idStore}/delivery`, {
				headers: {
					authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
				},
			});
			setStore(data);
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	const getAddress = async () => {
		setIsFetching(true);
		try {
			const { data } = await api.get(
				`/api/address/customers/${JSON.parse(localStorage.getItem('userData'))._id}`,
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
			);
			const address = data.find(item => item.mainAddressCustomer === true);
			setAddress(address);
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	const getCard = async () => {
		setIsFetching(true);
		try {
			const { data } = await api.get(
				`/api/card/customers/${JSON.parse(localStorage.getItem('userData'))._id}`,
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
			);
			let card = data.find(item => item.mainCardCustomer === true);

			const cardNumber = card.cardNumberCustomers.split(' ');
			const finalNumber = cardNumber[3];
			let processor = '';
			if (cardNumber[0].startsWith('4')) {
				processor = 'Visa';
			} else if (cardNumber[0].startsWith('5')) {
				processor = 'Mastercard';
			} else if (cardNumber[0].startsWith('36') || cardNumber[0].startsWith('38')) {
				processor = 'Dinners Club';
			} else if (cardNumber[0].startsWith('6')) {
				processor = 'Discover';
			} else if (cardNumber[0].startsWith('35')) {
				processor = 'JCB';
			} else if (cardNumber[0].startsWith('34') || cardNumber[0].startsWith('37')) {
				processor = 'American Express';
			} else {
				processor = 'Outro';
			}

			card = { ...card, finalNumber, processor };
			setCard(card);
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		const pricePerProduct = cartItems.map(product => product.quantity * product.priceProduct);
		if (pricePerProduct.length > 0) {
			const subtotal = pricePerProduct.reduce((a: number, b: number) => a + b);
			setSubtotal(subtotal);
		}
		localStorage.setItem('cart', JSON.stringify(cartItems));
	}, [cartItems]);

	useEffect(() => {
		setTotal(subtotal + store.deliveryFeeStore);
	}, [store]);

	useEffect(() => {
		setTotal(subtotal + store.deliveryFeeStore);
	}, [subtotal]);

	const handleDecreaseQuantity = (index: number) => {
		const allItems = [...cartItems];
		const item = allItems[index];
		if (item.quantity >= 2) {
			item.quantity = item.quantity - 1;
		}
		allItems[index] = item;
		setCartItems(allItems);
	};

	const handleIncreaseQuantity = (index: number) => {
		const allItems = [...cartItems];
		const item = allItems[index];
		item.quantity = item.quantity + 1;
		allItems[index] = item;
		setCartItems(allItems);
	};

	const handleRemoveItem = (index: number) => {
		const allItems = [...cartItems];
		allItems.splice(index, 1);
		setCartItems(allItems);
	};

	const handleBuy = async () => {
		if (!isFetching) {
			if (subtotal < 15) {
				setIsMessageVisible(true);
				setTimeout(() => {
					setIsMessageVisible(false);
				}, 5000);
			} else {
				setIsBuying(true);
				const newOrder = {
					idCustomer: JSON.parse(localStorage.getItem('userData'))._id,
					idStore: store._id,
					orderProducts: cartItems,
					dateOrder: new Date(),
					statusOrder: 'pendingAcceptance',
					subTotalOrder: subtotal.toFixed(2),
					totalOrder: total.toFixed(2),
					deliveryFeeOrder: store.deliveryFeeStore,
					deliveryEstimatedOrder: store.deliveryEstimatedTimeStore,
					paymentOrder: card,
					addressCustomer: address,
				};
				try {
					await api.post('/api/create/orders', newOrder, {
						headers: {
							authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
						},
					});
					router.push('/customer/success');
					localStorage.removeItem('cart');
				} catch (error) {
					console.log(error);
				}
			}
		}
		scroll.scrollToBottom();
	};

	return (
		<Container>
			<>
				<Section>
					<TitleBox title='Carrinho' />
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
						<BoxCard>
							<LoadingMessage />
						</BoxCard>
					) : (
						<>
							<BoxCard>
								{cartItems.length === 0 ? (
									<Message>Nenhum item no carrinho!</Message>
								) : (
									cartItems.map((item, index) => (
										<CartCard
											key={item._id}
											quantity={item.quantity}
											store={item.storeName}
											description={item.descriptionProduct}
											composition={item.compositionProduct}
											price={item.priceProduct}
											totalPrice={item.priceProduct * item.quantity}
											src={item.imageProduct}
											decreaseQuantity={() => handleDecreaseQuantity(index)}
											increaseQuantity={() => handleIncreaseQuantity(index)}
											removeItem={() => handleRemoveItem(index)}
										/>
									))
								)}
							</BoxCard>
							<BoxCard>
								<FinishCard>
									<div className='total'>
										<span>Subtotal (mínimo de R$ 15,00):</span>
										<span className='info'>
											R$ {subtotal.toFixed(2).replace('.', ',')}
										</span>
									</div>
									<div className='total'>
										<span>Taxa de entrega:</span>
										<span className='info'>
											R$ {store.deliveryFeeStore.toFixed(2).replace('.', ',')}
										</span>
									</div>
								</FinishCard>
								<FinishCard>
									<Link href='/customer/address' passHref>
										<a>
											<Button
												width='100%'
												height='auto'
												color={Theme.colors.black}
												backgroundColor={Theme.colors.white}
											>
												<div>
													<span>Entregar em:</span>
													{address._id === '' ? (
														<span className='info'>
															Selecione um endereço
														</span>
													) : (
														<span className='info'>
															{`${address.streetNameCustomer}, Nº ${
																address.streetNumberCustomer
															}, ${
																address.complementCustomer !== ''
																	? address.complementCustomer +
																	  ', '
																	: ''
															}${address.neighborhoodCustomer}, ${
																address.cityCustomer
															} - ${address.stateCustomer}`}
														</span>
													)}
												</div>
											</Button>
										</a>
									</Link>
								</FinishCard>
								<FinishCard>
									<Link href='/customer/payment' passHref>
										<a>
											<Button
												width='100%'
												height='auto'
												color={Theme.colors.black}
												backgroundColor={Theme.colors.white}
											>
												<div>
													<span>Forma de Pagamento:</span>
													{card._id === '' ? (
														<span className='info'>
															Selecione um cartão
														</span>
													) : (
														<span className='info'>
															{`${card.cardTypeCustomers} - ${card.processor} (final ${card.finalNumber})`}
														</span>
													)}
												</div>
											</Button>
										</a>
									</Link>
								</FinishCard>
								<FinishCard>
									<Button
										className={`icon margin ${
											(cartItems.length === 0 || address._id === '') &&
											'disabled'
										} ${isBuying && 'right'}`}
										width='100%'
										height='80px'
										color={Theme.colors.white}
										backgroundColor={Theme.colors.green}
										onClick={handleBuy}
										disabled={cartItems.length === 0 || address._id === ''}
										isLoading={isBuying}
									>
										{isBuying ? (
											'Finalizando compra...'
										) : (
											<div>
												<span>
													<svg
														className='w-6 h-6'
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
														style={{ marginRight: '0.6rem' }}
													>
														<path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
													</svg>
													Finalizar compra
												</span>
												<span className='info'>
													R$ {total.toFixed(2).replace('.', ',')}
												</span>
											</div>
										)}
									</Button>
								</FinishCard>
							</BoxCard>
							<AnimatePresence>
								{isMessageVisible && (
									<motion.div
										initial={{ opacity: 0 }}
										exit={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.3 }}
									>
										<IncorrectMessage>
											Pedido mínimo de R$ 15,00!
										</IncorrectMessage>
									</motion.div>
								)}
							</AnimatePresence>
						</>
					)}
				</Section>
			</>
		</Container>
	);
};

export default Cart;
