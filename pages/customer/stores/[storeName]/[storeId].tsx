import React, { useEffect, useState } from 'react';
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

import { Section, BoxCard } from '../../../../styles/customer/store';
import Theme from '../../../../styles/theme';

import { useNavigation } from '../../../../contexts/NavigationContext';

const Store: React.FC = () => {
	const { setNavigationState } = useNavigation();

	const [products, setProducts] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	useEffect(() => {
		setNavigationState({
			home: true,
			search: false,
			orders: false,
			profile: false,
		});
	}, []);

	const { query } = useRouter();

	const getAllProducts = async () => {
		try {
			const { data } = await api.get(`/api/products/stores/${query.storeId as string}`);

			setProducts(data);
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
					<SearchField />
					{isFetching ? (
						<BoxCard>
							<LoadingMessage />
						</BoxCard>
					) : (
						<BoxCard>
							{products.map(product => (
								<ProductCard
									key={product._id}
									storeName={query.storeName as string}
									productId={product._id}
									description={product.descriptionProduct}
									price={product.priceProduct}
									src={product.imageProduct}
									availability={product.availabilityProduct}
								/>
							))}
						</BoxCard>
					)}
				</Section>
			</>
		</Container>
	);
};

export default Store;
