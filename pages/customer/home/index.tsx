import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import StoreCard from '../../../components/StoreCard';
import CartIcon from '../../../components/CartIcon';

import { Section, BoxCard, Greeting } from '../../../styles/customer/home';

import { useNavigation } from '../../../contexts/NavigationContext';

interface IUser {
	_id: string;
	cpfCustomer: string;
	emailCustomer: string;
	nameCustomer: string;
	phoneCustomer: string;
	registrationDateCustomer: string;
}

const Home: React.FC = () => {
	const { setNavigationState } = useNavigation();

	const [timeNow, setTimeNow] = useState(new Date().getHours());
	const [user, setUser] = useState<IUser>({
		_id: '',
		cpfCustomer: '',
		emailCustomer: '',
		nameCustomer: '',
		phoneCustomer: '',
		registrationDateCustomer: '',
	});

	useEffect(() => {
		setNavigationState({
			home: true,
			search: false,
			orders: false,
			profile: false,
		});
		setUser(JSON.parse(localStorage.getItem('userData')));
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeNow(new Date().getHours());
		}, 60000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Container>
			<>
				<Section>
					<div className='title'>
						<TitleBox title='Lojas' />
						<CartIcon />
					</div>
					<Greeting>
						{timeNow >= 0 && timeNow <= 4 && 'Boa noite'}
						{timeNow >= 5 && timeNow <= 11 && 'Bom dia'}
						{timeNow >= 12 && timeNow <= 17 && 'Boa tarde'}
						{timeNow >= 18 && timeNow <= 24 && 'Boa noite'},{' '}
						{user.nameCustomer.replace(/ .*/, '')}!
					</Greeting>
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
				</Section>
			</>
		</Container>
	);
};

// make page static

export const getStaticProps: GetStaticProps = async () => {
	// request to api
	// const { data } = await api.get('/');
	// const stores = data;

	return {
		props: {
			// stores: data,
			stores: [],
		},
		revalidate: 10, // time in seconds
	};
};

export default Home;
