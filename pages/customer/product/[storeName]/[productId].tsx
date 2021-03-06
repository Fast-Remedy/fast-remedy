import React, { useState, useEffect } from 'react';
import router, { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import api from '../../../../services/api';

import Container from '../../../../components/Container';
import TitleBox from '../../../../components/TitleBox';
import CartIcon from '../../../../components/CartIcon';
import ButtonsContainer from '../../../../components/ButtonsContainer';
import ProductDetailsCard from '../../../../components/ProductDetailsCard';
import Button from '../../../../components/Button';
import LoadingMessage from '../../../../components/LoadingMessage';
import Modal from '../../../../components/Modal';

import {
	Section,
	BoxCard,
	FinishCard,
	Message,
	Quantity,
} from '../../../../styles/customer/product';
import Theme from '../../../../styles/theme';

import { useNavigation } from '../../../../contexts/NavigationContext';

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
}

const Product: React.FC = () => {
	const { setNavigationState } = useNavigation();

	useEffect(
		() =>
			setNavigationState({
				home: true,
				search: false,
				orders: false,
				profile: false,
			}),
		[]
	);

	const [product, setProduct] = useState<IProduct>({
		_id: '',
		idStore: '',
		categoryProduct: '',
		descriptionProduct: '',
		compositionProduct: '',
		imageProduct: '',
		priceProduct: 0,
		availabilityProduct: false,
		registrationDateProduct: '',
	});
	const [quantity, setQuantity] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isFetching, setIsFetching] = useState(true);

	const { query } = useRouter();

	const getProduct = async () => {
		try {
			const { data } = await api.get(`/api/products/${query.productId}`);

			setProduct(data);
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getProduct();
		return () => {
			setProduct({
				_id: '',
				idStore: '',
				categoryProduct: '',
				descriptionProduct: '',
				compositionProduct: '',
				imageProduct: '',
				priceProduct: 0,
				availabilityProduct: false,
				registrationDateProduct: '',
			});
		};
	}, []);

	const [isMessageVisible, setIsMessageVisible] = useState(false);

	const handleAddToCart = () => {
		const cart = JSON.parse(localStorage.getItem('cart')) || [];
		const newProduct = {
			...product,
			storeName: query.storeName as string,
			quantity,
		};

		const checkStore = cart.map(product => {
			return product.storeName;
		});

		if (cart.length === 0 || checkStore.includes(newProduct.storeName)) {
			if (cart.length === 0) {
				cart.push(newProduct);
			} else {
				const checkProduct = cart.findIndex(product => product._id === newProduct._id);
				if (checkProduct !== -1) {
					cart[checkProduct].quantity = cart[checkProduct].quantity + newProduct.quantity;
				} else {
					cart.push(newProduct);
				}
			}

			localStorage.setItem('cart', JSON.stringify(cart));
			scroll.scrollToBottom();
			setIsMessageVisible(!isMessageVisible);
			setTimeout(() => {
				router.back();
			}, 2000);
		} else {
			setIsModalOpen(true);
		}
	};

	const handleAddToCartAnyway = () => {
		setIsModalOpen(false);
		const cart = [];
		const newProduct = {
			...product,
			storeName: query.storeName as string,
			quantity,
		};
		cart.push(newProduct);
		localStorage.setItem('cart', JSON.stringify(cart));
		scroll.scrollToBottom();
		setIsMessageVisible(!isMessageVisible);
		setTimeout(() => {
			router.back();
		}, 2000);
	};

	return (
		<Container>
			<>
				<Section>
					<AnimatePresence>
						{isModalOpen && (
							<motion.div
								key='modal'
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								style={{ zIndex: 1200 }}
							>
								<Modal
									modalType='storeError'
									mainFunction={handleAddToCartAnyway}
									backFunction={() => setIsModalOpen(false)}
								/>
							</motion.div>
						)}
					</AnimatePresence>
					<TitleBox title={query.storeName as string} fontSize='2rem' />
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
							<CartIcon />
						</>
					</ButtonsContainer>
					{isFetching ? (
						<BoxCard>
							<LoadingMessage />
						</BoxCard>
					) : (
						<>
							<BoxCard>
								<ProductDetailsCard
									description={product.descriptionProduct}
									composition={product.compositionProduct}
									src={product.imageProduct}
									price={product.priceProduct}
									availability={product.availabilityProduct}
								/>
							</BoxCard>
							<BoxCard>
								<FinishCard>
									<div className='total'>
										<span>Quantidade:</span>
										<span className='info'>{quantity}</span>
									</div>
								</FinishCard>
								<FinishCard>
									<Quantity>
										<Button
											width='3rem'
											height='3rem'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
											onClick={() => {
												if (quantity > 1) {
													setQuantity(quantity - 1);
												}
											}}
										>
											<svg
												style={{ height: '1.5rem', width: '1.5rem' }}
												fill='currentColor'
												viewBox='0 0 20 20'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													fillRule='evenodd'
													d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
													clipRule='evenodd'
												/>
											</svg>
										</Button>
										<div
											style={{
												display: 'flex',
												flexDirection: 'column',
												alignItems: 'center',
												justifyContent: 'center',
												textAlign: 'center',
											}}
										>
											<span className='info'>Total:</span>
											<span className='info-total'>
												{`R$ ${(product.priceProduct * quantity)
													.toFixed(2)
													.replace('.', ',')}`}
											</span>
										</div>
										<Button
											width='3rem'
											height='3rem'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
											onClick={() => setQuantity(quantity + 1)}
										>
											<svg
												style={{ height: '2rem', width: '2rem' }}
												fill='currentColor'
												viewBox='0 0 20 20'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													fillRule='evenodd'
													d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
													clipRule='evenodd'
												/>
											</svg>
										</Button>
									</Quantity>
								</FinishCard>
								<FinishCard>
									<Button
										className='icon margin'
										width='100%'
										height='80px'
										color={Theme.colors.white}
										backgroundColor={Theme.colors.green}
										onClick={handleAddToCart}
									>
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
												Adicionar ao carrinho
											</span>
										</div>
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
										<Message>Produto adicionado ao carrinho!</Message>
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

export default Product;
