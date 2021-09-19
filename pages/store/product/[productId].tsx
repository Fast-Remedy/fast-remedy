import React, { useState, useEffect } from 'react';
// import { GetStaticProps } from 'next';
import router, { useRouter } from 'next/router';
import { animateScroll as scroll } from 'react-scroll';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import LoadingMessage from '../../../components/LoadingMessage';

import { Section, BoxCard, FinishCard, Message } from '../../../styles/store/product';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

const Product: React.FC = () => {
	const { setNavigationState } = useNavigation();

	const [availability, setAvailability] = useState('soldOff');

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

	const handleAddToCart = () => {
		scroll.scrollToBottom();

		setTimeout(() => {
			router.back();
		}, 2000);
	};

	return (
		<Container>
			<>
				<Section>
					<TitleBox title='Catálogo' />
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
					{isFallback ? (
						<BoxCard>
							<LoadingMessage />
						</BoxCard>
					) : (
						<>
							<BoxCard>
								<ProductDetailsCard
									description={`Dipirona Sódica 500mg Genérico Medley 10 Comprimidos - ${query.productId}`}
									src='/images/logos/remedy.svg'
									price={5.69}
									availability={availability}
								/>
							</BoxCard>
							<BoxCard>
								<FinishCard>
									{availability === 'soldOff' ? (
										<Button
											className='icon right'
											width='100%'
											height='70px'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
											onClick={handleAddToCart}
										>
											<svg
												fill='currentColor'
												viewBox='0 0 20 20'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													fillRule='evenodd'
													d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
													clipRule='evenodd'
												/>
											</svg>
											Definir como disponível
										</Button>
									) : (
										<Button
											className='icon right'
											width='100%'
											height='70px'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
											onClick={handleAddToCart}
										>
											<svg
												fill='currentColor'
												viewBox='0 0 20 20'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													fillRule='evenodd'
													d='M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z'
													clipRule='evenodd'
												/>
											</svg>
											Definir como esgotado
										</Button>
									)}
								</FinishCard>
								<FinishCard>
									<Button
										className='icon right margin'
										width='100%'
										color={Theme.colors.white}
										backgroundColor={Theme.colors.green}
										onClick={handleAddToCart}
									>
										<svg
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
										</svg>
										Editar
									</Button>
								</FinishCard>
								<FinishCard>
									<Button
										className='icon right'
										width='100%'
										color={Theme.colors.white}
										backgroundColor={Theme.colors.red}
										onClick={handleAddToCart}
									>
										<svg
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
												clipRule='evenodd'
											/>
										</svg>
										Excluir
									</Button>
								</FinishCard>
							</BoxCard>
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
