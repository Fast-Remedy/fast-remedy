import React from 'react';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartIcon from '../../../components/CartIcon';
import Header from '../../../components/Header';
import ProductDetailsCard from '../../../components/ProductDetailsCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import LoadingMessage from '../../../components/LoadingMessage';

import { Section, BoxCard, FinishCard } from '../../../styles/product';
import Theme from '../../../styles/theme';

const Product: React.FC = () => {
	// return url param to show directly on interface
	// it's not required to use with SSG
	const { query } = useRouter();

	// check if data has already been loaded
	const { isFallback } = useRouter();

	const goBack = () => {
		window.history.back();
	};

	return (
		<Container>
			<>
				<Header />
				<Section>
					<TitleBox title='Drogaria Ultra Popular' fontSize='2rem' />
					<ButtonsContainer>
						<>
							<Button
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
								onClick={goBack}
							>
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
									description={`Dipirona Sódica 500mg Genérico Medley 10 Comprimidos - ${query.productId}`}
									src='/images/logos/remedy.svg'
									store='Drogaria Moderna'
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
										width='100%'
										height='80px'
										color={Theme.colors.white}
										backgroundColor={Theme.colors.green}
									>
										<div>
											<span>Adicionar ao carrinho</span>
											<span className='info'>R$ 5,59</span>
										</div>
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
