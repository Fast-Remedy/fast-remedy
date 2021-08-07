import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartIcon from '../../../components/CartIcon';
import CustomerHeader from '../../../components/CustomerHeader';
import ProductCard from '../../../components/ProductCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import SearchField from '../../../components/SearchField';
import LoadingMessage from '../../../components/LoadingMessage';

import { Section, BoxCard } from '../../../styles/customer/store';
import Theme from '../../../styles/theme';

const Store: React.FC = () => {
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
				<CustomerHeader />
				<Section>
					<TitleBox
						title={`Drogaria Ultra Popular - ${query.storeId}`}
						fontSize='2rem'
					/>
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
					<SearchField />
					{isFallback ? (
						<BoxCard>
							<LoadingMessage />
						</BoxCard>
					) : (
						<BoxCard>
							<ProductCard
								productId='1'
								description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
								price={5.69}
								src='/images/logos/remedy.svg'
							/>
							<ProductCard
								productId='1'
								description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
								price={5.69}
								src='/images/logos/remedy.svg'
							/>
							<ProductCard
								productId='1'
								description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
								price={5.69}
								src='/images/logos/remedy.svg'
							/>
							<ProductCard
								productId='1'
								description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
								price={5.69}
								src='/images/logos/remedy.svg'
							/>
							<ProductCard
								productId='1'
								description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
								price={5.69}
								src='/images/logos/remedy.svg'
							/>
						</BoxCard>
					)}
				</Section>
			</>
		</Container>
	);
};

// make page static

// export const getStaticPaths: GetStaticPaths = async () => {
// 	request to api
// 	const response = await api.get('/stores')
// 	const data = await response.json();

//     const paths = data.map(store => {
//         return {
//             params: { storeId: store.idStore}
//         }
//     })

// 	return {
// 		// paths,
// 		fallback: false,
// 	};
// };

// export const getStaticProps: GetStaticProps = async context => {
// 	const { storeId } = context.params;

// 	// request to api
// 	// const response = await api.get(`/stores/${storeId}`)
// 	// const data = await response.json();

// 	return {
// 		props: {
// 			products: data,
// 		},
// 		revalidate: 10, // time in seconds
// 	};
// };

export default Store;
