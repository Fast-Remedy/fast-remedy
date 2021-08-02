import React from 'react';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartIcon from '../../../components/CartIcon';
import Header from '../../../components/Header';
import StoreCard from '../../../components/StoreCard';
import SearchField from '../../../components/SearchField';

import { Section, BoxCard, BoxCard2 } from '../../../styles/search';
import ProductCard from '../../../components/ProductCard';

const Search: React.FC = () => {
	return (
		<Container>
			<>
				<Header />
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
							alt='Drogaria Moderna'
						/>
						<StoreCard
							storeId='1'
							name='Drogaria Moderna'
							category='Farmácia'
							src='/images/logos/drogaria-moderna.png'
							alt='Drogaria Moderna'
						/>
						<StoreCard
							storeId='1'
							name='Drogaria Moderna'
							category='Farmácia'
							src='/images/logos/drogaria-moderna.png'
							alt='Drogaria Moderna'
						/>
						<StoreCard
							storeId='1'
							name='Drogaria Moderna'
							category='Farmácia'
							src='/images/logos/drogaria-moderna.png'
							alt='Drogaria Moderna'
						/>
						<StoreCard
							storeId='1'
							name='Drogaria Moderna'
							category='Farmácia'
							src='/images/logos/drogaria-moderna.png'
							alt='Drogaria Moderna'
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
