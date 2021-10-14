import React, { useEffect } from 'react';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import StoreOrdersCard from '../../../components/StoreOrdersCard';

import { Section, BoxCard } from '../../../styles/store/orders';

import { useNavigation } from '../../../contexts/NavigationContext';

const Orders: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: true,
			catalog: false,
			profile: false,
		});
	}, []);

	return (
		<Container>
			<>
				<Section>
					<div className='title'>
						<TitleBox title='Pedidos' />
					</div>
					<BoxCard>
						<StoreOrdersCard
							orderId='4'
							customerName='Fulano de Tal'
							customerAddress='Retiro, Volta Redonda - RJ'
							itemsQuantity={1}
							status='pendingAcceptance'
							time='Quarta-feira, 11/08/2021 às 19h41'
							items={[
								{
									quantity: 1,
									descriptionProduct:
										'Dipirona Sódica 500mg Genérico Medley 10 Comprimidos',
								},
							]}
						/>
						<StoreOrdersCard
							orderId='1'
							customerName='Fulano de Tal'
							customerAddress='Retiro, Volta Redonda - RJ'
							itemsQuantity={3}
							status='inProgress'
							time='Quarta-feira, 11/08/2021 às 19h41'
							items={[
								{
									quantity: 1,
									descriptionProduct:
										'Dipirona Sódica 500mg Genérico Medley 10 Comprimidos',
								},
								{
									quantity: 1,
									descriptionProduct:
										'Maleato de Dexclorfeniramina 2mg/5ml Cimed Solução Oral Sabor Laranja com 120ml',
								},
								{
									quantity: 1,
									descriptionProduct:
										'Aparelho de Barbear MACH3 Gillette - 1 Unidade',
								},
							]}
						/>
						<StoreOrdersCard
							orderId='2'
							customerName='Fulano de Tal'
							customerAddress='Retiro, Volta Redonda - RJ'
							itemsQuantity={6}
							status='finished'
							time='Quarta-feira, 11/08/2021 às 19h41'
							items={[
								{
									quantity: 1,
									descriptionProduct:
										'Dipirona Sódica 500mg Genérico Medley 10 Comprimidos',
								},
								{
									quantity: 1,
									descriptionProduct: 'Bromoprida Xarope Medley 100mL',
								},
								{
									quantity: 2,
									descriptionProduct: 'Paracetamol Cartela Teuto 10 Comprimidos',
								},
								{
									quantity: 2,
									descriptionProduct: 'Dorflex Caixa Com 50 Comprimidos',
								},
							]}
						/>
						<StoreOrdersCard
							orderId='3'
							customerName='Fulano de Tal'
							customerAddress='Retiro, Volta Redonda - RJ'
							itemsQuantity={1}
							status='canceled'
							time='Quarta-feira, 11/08/2021 às 19h41'
							items={[
								{
									quantity: 1,
									descriptionProduct:
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
