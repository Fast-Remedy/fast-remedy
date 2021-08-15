import React from 'react';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartIcon from '../../../components/CartIcon';
import OrdersCard from '../../../components/OrdersCard';

import { Section, BoxCard } from '../../../styles/customer/orders';
import Theme from '../../../styles/theme';

const Orders: React.FC = () => {
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
									quantity: 2,
									description: 'Bromoprida Xarope Medley 100mL',
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
