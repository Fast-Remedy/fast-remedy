import React, { useEffect } from 'react';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartIcon from '../../../components/CartIcon';
import OrdersCard from '../../../components/OrdersCard';

import { Section, BoxCard } from '../../../styles/customer/orders';

import { useNavigation } from '../../../contexts/NavigationContext';

const Orders: React.FC = () => {
	const { setNavigationState } = useNavigation();

	useEffect(
		() =>
			setNavigationState({
				home: false,
				search: false,
				orders: true,
				profile: false,
			}),
		[]
	);

	const goBack = () => {
		window.history.back();
	};

	return (
		<Container>
			<>
				<Section>
					<div className='title'>
						<TitleBox title='Pedidos' />
						<CartIcon />
					</div>
					<BoxCard>
						<OrdersCard
							orderId='1'
							imageSrc='/images/logos/drogaria-moderna.png'
							storeName='Drogaria Moderna'
							status='inProgress'
							time='Quarta-feira, 11/08/2021 às 19h41'
							items={[
								{
									quantity: 1,
									description:
										'Dipirona Sódica 500mg Genérico Medley 10 Comprimidos',
								},
								{
									quantity: 1,
									description: 'Maleato de Dexclorfeniramina 2mg/5ml Cimed Solução Oral Sabor Laranja com 120ml',
								},
								{
									quantity: 1,
									description: 'Aparelho de Barbear MACH3 Gillette - 1 Unidade',
								},
							]}
						/>
						<OrdersCard
							orderId='2'
							imageSrc='/images/logos/drogaria-moderna.png'
							storeName='Drogaria Moderna'
							status='finished'
							time='Quarta-feira, 11/08/2021 às 19h41'
							items={[
								{
									quantity: 1,
									description:
										'Dipirona Sódica 500mg Genérico Medley 10 Comprimidos',
								},
								{
									quantity: 1,
									description: 'Bromoprida Xarope Medley 100mL',
								},
								{
									quantity: 2,
									description: 'Paracetamol Cartela Teuto 10 Comprimidos',
								},
								{
									quantity: 2,
									description: 'Dorflex Caixa Com 50 Comprimidos',
								},
							]}
						/>
						<OrdersCard
							orderId='3'
							imageSrc='/images/logos/drogaria-moderna.png'
							storeName='Drogaria Moderna'
							status='canceled'
							time='Quarta-feira, 11/08/2021 às 19h41'
							items={[
								{
									quantity: 1,
									description:
										'Dipirona Sódica 500mg Genérico Medley 10 Comprimidos',
								},
							]}
						/>
					</BoxCard>
				</Section>
			</>
		</Container>
	);
};

export default Orders;
