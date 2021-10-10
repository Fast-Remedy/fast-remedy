import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import api from '../../../services/api';

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

interface IStore {
	_id: string;
	tradingNameStore: string;
	imageStore: string;
	deliveryFeeStore: number;
	deliveryEstimatedTimeStore: number;
}

interface IStores {
	stores: IStore[];
}

const Home = ({ stores }: IStores) => {
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
	const [userName, setUserName] = useState('');

	useEffect(() => {
		setNavigationState({
			home: true,
			search: false,
			orders: false,
			profile: false,
		});
		setUser(JSON.parse(localStorage.getItem('userData')));
	}, []);

	// const getData = async () => {
	// 	const token = JSON.parse(localStorage.getItem('token'));
	// 	const { data } = await api.get('/api/stores', {
	// 		headers: { authorization: `Bearer ${token}` },
	// 	});
	// 	console.log(data);
	// };

	useEffect(() => {
		setUserName(user?.nameCustomer.replace(/ .*/, ''));
	}, [user]);

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
						{timeNow >= 18 && timeNow <= 24 && 'Boa noite'}, {userName}!
					</Greeting>
					<BoxCard>
						{stores &&
							stores.map(store => (
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
				</Section>
			</>
		</Container>
	);
};

// make page static

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get('/api/stores');

	return {
		props: {
			stores: data,
		},
		revalidate: 300, // time in seconds
	};
};

export default Home;
