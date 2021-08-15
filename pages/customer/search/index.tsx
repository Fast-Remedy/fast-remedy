import React, { useEffect } from 'react';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartIcon from '../../../components/CartIcon';
import StoreCard from '../../../components/StoreCard';
import SearchField from '../../../components/SearchField';

import { Section, BoxCard, BoxCard2 } from '../../../styles/customer/search';
import ProductCard from '../../../components/ProductCard';

import { useNavigation } from '../../../contexts/NavigationContext';

const Search: React.FC = () => {
	const { setNavigationState } = useNavigation();

	useEffect(
		() =>
			setNavigationState({
				home: false,
				search: true,
				orders: false,
				profile: false,
			}),
		[]
	);

	return (
		<Container>
			<>
				<Section>
					<div className='title'>
						<TitleBox title='Buscar' />
						<CartIcon />
					</div>
					<SearchField />
					<BoxCard>
						<StoreCard
							storeId='1'
							name='Drogaria Moderna'
							category='Farmácia'
							src='/images/logos/drogaria-moderna.png'
						/>
						<StoreCard
							storeId='1'
							name='Drogaria Moderna'
							category='Farmácia'
							src='/images/logos/drogaria-moderna.png'
						/>
						<StoreCard
							storeId='1'
							name='Drogaria Moderna'
							category='Farmácia'
							src='/images/logos/drogaria-moderna.png'
						/>
						<StoreCard
							storeId='1'
							name='Drogaria Moderna'
							category='Farmácia'
							src='/images/logos/drogaria-moderna.png'
						/>
						<StoreCard
							storeId='1'
							name='Drogaria Moderna'
							category='Farmácia'
							src='/images/logos/drogaria-moderna.png'
						/>
					</BoxCard>
					<BoxCard2>
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
					</BoxCard2>
				</Section>
			</>
		</Container>
	);
};

export default Search;
