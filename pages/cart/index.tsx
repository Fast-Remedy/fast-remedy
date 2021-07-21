import React from 'react';
import Header from '../../components/header';
import ProductCard from '../../components/productCard';
import { Title, Section, BoxCard } from './styles';
import { Button } from '../../components/button/styles';
import Theme from '../theme';

const Cart: React.FC = () => {
	return (
		<>
			<Header />
			<Section>
				<Title>Drogaria Moderna</Title>
				<div>
					<Button
						width='95px'
						color={Theme.colors.white}
						bg={Theme.colors.lightGreen}
					>
						Finalizar
					</Button>
					<Button
						width='80px'
						color={Theme.colors.white}
						bg={Theme.colors.lightGreen}
					>
						Voltar
					</Button>
				</div>
				<BoxCard>
					<ProductCard src='/images/logos/remedy.svg'>

					</ProductCard>
				</BoxCard>
			</Section>
		</>
	);
};

export default Cart;
