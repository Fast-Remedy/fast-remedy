import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import router, { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import StoreProductCard from '../../../components/StoreProductCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import SearchField from '../../../components/SearchField';
import LoadingMessage from '../../../components/LoadingMessage';

import { Section, BoxCard } from '../../../styles/store/catalog';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

const Catalog: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: false,
			catalog: true,
			profile: false,
		});
	}, []);

	// return url param to show directly on interface
	// it's not required to use with SSG
	const { query } = useRouter();

	// check if data has already been loaded
	const { isFallback } = useRouter();

	return (
		<Container>
			<>
				<Section>
					<TitleBox title='Catálogo' />
					<ButtonsContainer>
						<Button
							className='icon right'
							color={Theme.colors.white}
							width='100%'
							height='70px'
							backgroundColor={Theme.colors.green}
							onClick={() => router.push('/store/catalog/new')}
						>
							<svg
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
							Novo produto
						</Button>
					</ButtonsContainer>
					<SearchField />
					{isFallback ? (
						<BoxCard>
							<LoadingMessage />
						</BoxCard>
					) : (
						<BoxCard>
							<StoreProductCard
								productId='1'
								description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
								price={5.69}
								src='/images/logos/remedy.svg'
								availability='soldOff'
							/>
							<StoreProductCard
								productId='1'
								description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
								price={5.69}
								src='/images/logos/remedy.svg'
								availability='available'
							/>
							<StoreProductCard
								productId='1'
								description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
								price={5.69}
								src='/images/logos/remedy.svg'
								availability='available'
							/>
							<StoreProductCard
								productId='1'
								description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
								price={5.69}
								src='/images/logos/remedy.svg'
								availability='available'
							/>
							<StoreProductCard
								productId='1'
								description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
								price={5.69}
								src='/images/logos/remedy.svg'
								availability='available'
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

export default Catalog;
