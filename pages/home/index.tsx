import React from 'react';
import { GetStaticProps } from 'next';

import Container from '../../components/Container';
import TitleBox from '../../components/TitleBox';
import Header from '../../components/Header';
import StoreCard from '../../components/StoreCard';
import SearchField from '../../components/SearchField';
import CartIcon from '../../components/CartIcon';

import { Section, BoxCard } from './styles';

const Home: React.FC = () => {
	return (
		<Container>
			<>
				<Header />
				<Section>
					<span>Parei na rota /address ao clicar no botão adicionar</span>
					<div className='title'>
						<TitleBox title='Lojas' />
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
				</Section>
			</>
		</Container>
	);
};

// make page static

export const getStaticProps: GetStaticProps = async () => {
	// request to api
	// const response = await api.get('/stores')
	// const data = await response.json();

	return {
		props: {
			// stores: data,
			stores: [],
		},
        revalidate: 10, // time in seconds
	};
};

export default Home;