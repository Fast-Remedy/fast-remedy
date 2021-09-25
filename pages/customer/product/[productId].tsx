import React, { useState, useEffect } from 'react';
// import { GetStaticProps } from 'next';
import router, { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartIcon from '../../../components/CartIcon';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import LoadingMessage from '../../../components/LoadingMessage';

import { Section, BoxCard, FinishCard, Message } from '../../../styles/customer/product';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

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

	// return url param to show directly on interface
	// it's not required to use with SSG
	const { query } = useRouter();

	// check if data has already been loaded
	const { isFallback } = useRouter();

	const [isMessageVisible, setIsMessageVisible] = useState(false);

	const handleAddToCart = () => {
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
					<TitleBox title='Drogaria Ultra Popular' fontSize='2rem' />
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
					{isFallback ? (
						<BoxCard>
							<LoadingMessage />
						</BoxCard>
					) : (
						<>
							<BoxCard>
								<ProductDetailsCard
									description={`Dipirona Sódica 500mg Genérico Medley 10 Comprimidos`}
									src='/images/logos/remedy.svg'
									price={5.69}
								/>
							</BoxCard>
							<BoxCard>
								<FinishCard>
									<div className='total'>
										<span>Quantidade:</span>
										<span className='info'>1</span>
									</div>
								</FinishCard>
								<FinishCard>
									<ButtonsContainer width='40%'>
										<>
											<Button
												width='2.5rem'
												height='2.5rem'
												color={Theme.colors.white}
												backgroundColor={Theme.colors.green}
											>
												-
											</Button>
											<Button
												width='2.5rem'
												height='2.5rem'
												color={Theme.colors.white}
												backgroundColor={Theme.colors.green}
											>
												+
											</Button>
										</>
									</ButtonsContainer>
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
											<span className='info'>R$ 5,59</span>
										</div>
									</Button>
								</FinishCard>
							</BoxCard>
							{isMessageVisible && (
								<AnimatePresence>
									<motion.div
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.3 }}
									>
										<Message>Produto adicionado ao carrinho!</Message>
									</motion.div>
								</AnimatePresence>
							)}
						</>
					)}
				</Section>
			</>
		</Container>
	);
};

// make page static

// export const getStaticPaths: GetStaticPaths = async () => {
// 	request to api
// 	const response = await api.get('/products')
// 	const data = await response.json();

//     const paths = data.map(product => {
//         return {
//             params: { productId: product.idProduct}
//         }
//     })

// 	return {
// 		// paths,
// 		fallback: false,
// 	};
// };

// export const getStaticProps: GetStaticProps = async context => {
// 	const { productId } = context.params;

// 	// request to api
// 	// const response = await api.get(`/products/${productId}`)
// 	// const data = await response.json();

// 	return {
// 		props: {
// 			product: data,
// 		},
// 		revalidate: 10, // time in seconds
// 	};
// };

export default Product;
