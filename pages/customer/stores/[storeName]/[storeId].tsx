import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import router, { useRouter } from 'next/router';
import api from '../../../../services/api';

import Container from '../../../../components/Container';
import TitleBox from '../../../../components/TitleBox';
import CartIcon from '../../../../components/CartIcon';
import ProductCard from '../../../../components/ProductCard';
import ButtonsContainer from '../../../../components/ButtonsContainer';
import Button from '../../../../components/Button';
import SearchField from '../../../../components/SearchField';
import LoadingMessage from '../../../../components/LoadingMessage';
import SelectField from '../../../../components/SelectField';

import { Section, BoxCard, Message } from '../../../../styles/customer/store';
import Theme from '../../../../styles/theme';

import { useNavigation } from '../../../../contexts/NavigationContext';

const Store = ({ products }) => {
	const { isFallback } = useRouter();
	const { setNavigationState } = useNavigation();

	const [searchProducts, setSearchProducts] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [searchCategory, setSearchCategory] = useState('');

	useEffect(() => {
		setNavigationState({
			home: true,
			search: false,
			orders: false,
			profile: false,
		});
	}, []);

	useEffect(() => {
		const filteredProducts = products.filter(
			product =>
				product.descriptionProduct.toLowerCase().includes(searchInput.toLowerCase()) ||
				product.compositionProduct?.toLowerCase().includes(searchInput.toLowerCase())
		);
		setSearchProducts(filteredProducts.slice(0, 3));
	}, [searchInput]);

	const { query } = useRouter();

	return (
		<Container>
			<>
				<Section>
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
					<SearchField
						value={searchInput}
						onChange={e => setSearchInput(e.target.value)}
						style={{ marginBottom: '1rem' }}
					/>
					<SelectField
						value={searchCategory}
						onChange={e => setSearchCategory(e.target.value)}
					>
						<option value=''>Todas as categorias</option>
						<option value='medicines'>Medicamentos</option>
						<option value='cosmetics'>Cosméticos / beleza</option>
						<option value='vitamins'>Suplementos / vitaminas</option>
						<option value='food'>Biscoitos / balas / comestíveis</option>
						<option value='hygiene'>Higiene pessoal</option>
						<option value='babies'>Cuidados com bebê</option>
						<option value='devices'>Aparelhos</option>
					</SelectField>
					{isFallback ? (
						<BoxCard>
							<LoadingMessage />
						</BoxCard>
					) : (
						<>
							{searchInput.trim() !== '' &&
								(searchProducts.filter(product =>
									product.categoryProduct
										.toLowerCase()
										.includes(searchCategory.toLowerCase())
								).length > 0 ? (
									<BoxCard>
										{searchProducts
											.filter(product =>
												product.categoryProduct
													.toLowerCase()
													.includes(searchCategory.toLowerCase())
											)
											.map(product => (
												<ProductCard
													key={product._id}
													productId={product._id}
													description={product.descriptionProduct}
													composition={product.compositionProduct}
													price={product.priceProduct}
													src={product.imageProduct}
													availability={product.availabilityProduct}
												/>
											))}
									</BoxCard>
								) : (
									<Message>Nenhum produto encontrado!</Message>
								))}
							{searchInput.trim() === '' &&
								(products.filter(product =>
									product.categoryProduct
										.toLowerCase()
										.includes(searchCategory.toLowerCase())
								).length > 0 ? (
									<BoxCard>
										{products
											.filter(product =>
												product.categoryProduct
													.toLowerCase()
													.includes(searchCategory.toLowerCase())
											)
											.map(product => (
												<ProductCard
													key={product._id}
													productId={product._id}
													description={product.descriptionProduct}
													composition={product.compositionProduct}
													price={product.priceProduct}
													src={product.imageProduct}
													availability={product.availabilityProduct}
												/>
											))}
									</BoxCard>
								) : (
									<Message>Nenhum produto encontrado!</Message>
								))}
						</>
					)}
				</Section>
			</>
		</Container>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await api.get('/api/stores');

	const paths = data.map(store => {
		return {
			params: { storeId: store._id, storeName: store.tradingNameStore },
		};
	});

	return {
		paths,
		fallback: true,
	};
};

export const getStaticProps: GetStaticProps = async context => {
	const { storeId } = context.params;

	const { data } = await api.get(`/api/products/stores/${storeId as string}`);

	return {
		props: {
			products: data.sort((a, b) =>
				a.descriptionProduct > b.descriptionProduct
					? 1
					: b.descriptionProduct > a.descriptionProduct
					? -1
					: 0
			),
		},
		revalidate: 60, // time in seconds
	};
};

export default Store;
