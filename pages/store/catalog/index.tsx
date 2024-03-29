import React, { useEffect, useState } from 'react';
import router from 'next/router';
import api from '../../../services/api';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import StoreProductCard from '../../../components/StoreProductCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import SearchField from '../../../components/SearchField';
import LoadingMessage from '../../../components/LoadingMessage';
import SelectField from '../../../components/SelectField';

import { Section, BoxCard, Message } from '../../../styles/store/catalog';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

const Catalog: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	const [products, setProducts] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	const [searchProducts, setSearchProducts] = useState([]);
	const [searchInput, setSearchInput] = useState('');
	const [searchCategory, setSearchCategory] = useState('');

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: false,
			catalog: true,
			profile: false,
		});
	}, []);

	const getAllProducts = async () => {
		try {
			const { data } = await api.get(
				`/api/products/stores/${JSON.parse(localStorage.getItem('storeData'))._id}`
			);

			setProducts(
				data.sort((a, b) =>
					a.descriptionProduct > b.descriptionProduct
						? 1
						: b.descriptionProduct > a.descriptionProduct
						? -1
						: 0
				)
			);
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllProducts();
		return () => {
			setProducts([]);
		};
	}, []);

	useEffect(() => {
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
					{isFetching ? (
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
												<StoreProductCard
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
												<StoreProductCard
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

export default Catalog;
