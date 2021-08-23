import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import StoreNewOrderCard from '../../../components/StoreNewOrderCard';

import {
	Section,
	BoxCard,
	Greeting,
	InfoCard,
	NewOrders,
	NewOrdersCard,
} from '../../../styles/store/home';

import { useNavigation } from '../../../contexts/NavigationContext';

const Home: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	const [timeNow, setTimeNow] = useState(new Date().getHours());

	useEffect(() => {
		setStoreNavigationState({
			home: true,
			orders: false,
			catalog: false,
			profile: false,
		});
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeNow(new Date().getHours());
			console.log(timeNow);
		}, 60000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Container>
			<>
				<Section>
					<div className='title'>
						<TitleBox title='Resumo' />
					</div>
					<Greeting>
						{timeNow >= 0 && timeNow <= 4 && 'Boa noite'}
						{timeNow >= 5 && timeNow <= 11 && 'Bom dia'}
						{timeNow >= 12 && timeNow <= 17 && 'Boa tarde'}
						{timeNow >= 18 && timeNow <= 24 && 'Boa noite'}, Loja X!
					</Greeting>
					<BoxCard>
						<InfoCard>
							<h1>Hoje</h1>
							<span>Pedidos em andamento: 11</span>
							<span>Pedidos concluídos: 57</span>
							<span>Total: R$ 753,34</span>
						</InfoCard>
						<InfoCard>
							<h1>Total</h1>
							<span>Pedidos concluídos: 1346</span>
							<span>Clientes atendidos: 642</span>
							<span>Total: R$ 75.453,34</span>
						</InfoCard>
					</BoxCard>
					<NewOrders>
						<NewOrdersCard>
							<h1>Você possui novos pedidos!</h1>
							<StoreNewOrderCard
								orderId='1'
								customerName='Antônio Silva de Abreu Rodrigues Paulino'
								customerAddress='Retiro, Volta Redonda - RJ'
								items={2}
								time='Quarta-feira, 11/08/2021 às 19h41'
							/>
							<StoreNewOrderCard
								orderId='2'
								customerName='Ricardo Souza da Costa Santos'
								customerAddress='Retiro, Volta Redonda - RJ'
								items={1}
								time='Quarta-feira, 11/08/2021 às 19h41'
							/>
						</NewOrdersCard>
					</NewOrders>
				</Section>
			</>
		</Container>
	);
};

export default Home;
