import React from 'react';
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
					<span>Parei na rota /address ao clicar no botao adicionar</span>
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

export default Home;
