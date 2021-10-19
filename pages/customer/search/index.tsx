import React, { useEffect, useState } from 'react';
import { GetStaticProps } from 'next';
import api from '../../../services/api';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartIcon from '../../../components/CartIcon';
import StoreCard from '../../../components/StoreCard';
import SearchField from '../../../components/SearchField';

import { Section, BoxCard, BoxCard2, Message } from '../../../styles/customer/search';
import ProductCard from '../../../components/ProductCard';

import { useNavigation } from '../../../contexts/NavigationContext';

const Search = ({ stores, products }) => {
	const { setNavigationState } = useNavigation();

	const [searchStores, setSearchStores] = useState([]);
	const [searchProducts, setSearchProducts] = useState([]);
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		setNavigationState({
			home: false,
			search: true,
			orders: false,
			profile: false,
		});
	}, []);

	useEffect(() => {
		const filteredStores = stores.filter(store =>
			store.tradingNameStore.toLowerCase().includes(searchInput.toLowerCase())
		);
		setSearchStores(filteredStores.slice(0, 3));
		const filteredProducts = products.filter(
			product =>
				product.descriptionProduct.toLowerCase().includes(searchInput.toLowerCase()) ||
				product.compositionProduct?.toLowerCase().includes(searchInput.toLowerCase())
		);
		setSearchProducts(filteredProducts.slice(0, 3));
	}, [searchInput]);

	return (
		<Container>
			<>
				<Section>
					<div className='title'>
						<TitleBox title='Buscar' />
						<CartIcon />
					</div>
					<SearchField
						value={searchInput}
						onChange={e => setSearchInput(e.target.value)}
						style={{ marginTop: '1.1rem' }}
					/>
					{searchInput.trim() !== '' && (
						<>
							{searchStores.length > 0 ? (
								<BoxCard>
									{searchStores.map(store => (
										<StoreCard
											key={store._id}
											storeId={store._id}
											name={store.tradingNameStore}
											fee={store.deliveryFeeStore}
											estimatedTime={store.deliveryEstimatedTimeStore}
											src={store.imageStore}
										/>
									))}
								</BoxCard>
							) : (
								<BoxCard
									style={{
										backgroundColor: '#fff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: 0,
									}}
								>
									<Message>Nenhuma loja encontrada!</Message>
								</BoxCard>
							)}
							{searchProducts.length > 0 ? (
								<BoxCard2>
									{searchProducts.map(product => (
										<ProductCard
											key={product._id}
											storeName={
												stores.filter(
													store => store._id === product.idStore
												)[0].tradingNameStore
											}
											showStoreName={true}
											productId={product._id}
											description={product.descriptionProduct}
											composition={product.compositionProduct}
											price={product.priceProduct}
											src={product.imageProduct}
											availability={product.availabilityProduct}
										/>
									))}
								</BoxCard2>
							) : (
								<BoxCard
									style={{
										backgroundColor: '#fff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										marginBottom: 0,
									}}
								>
									<Message>Nenhum produto encontrado!</Message>
								</BoxCard>
							)}
						</>
					)}
				</Section>
			</>
		</Container>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const responseStores = await api.get('/api/stores');
	const stores = responseStores.data;
	const responseProducts = await api.get('/api/products');
	const products = responseProducts.data;

	return {
		props: {
			products: products.sort((a, b) =>
				a.descriptionProduct > b.descriptionProduct
					? 1
					: b.descriptionProduct > a.descriptionProduct
					? -1
					: 0
			),
			stores: stores.sort((a, b) =>
				a.tradingNameStore > b.tradingNameStore
					? 1
					: b.tradingNameStore > a.tradingNameStore
					? -1
					: 0
			),
		},
		revalidate: 60, // time in seconds
	};
};

export default Search;
