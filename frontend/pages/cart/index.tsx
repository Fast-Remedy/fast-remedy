import React from 'react';
import Container from '../../components/container';
import TitleBox from '../../components/titleBox';
import Header from '../../components/header';
import CartCard from '../../components/cartCard';
import { Section, BoxCard } from './styles';
import Button from '../../components/button';
import Theme from '../theme';

const Cart: React.FC = () => {
	return (
		<Container>
			<>
				<Header />
				<Section>
					<TitleBox title='Carrinho' />
					<div>
						<Button
							width='95px'
							color={Theme.colors.white}
							backgroundColor={Theme.colors.lightGreen}
						>
							Finalizar
						</Button>
						<Button
							width='80px'
							color={Theme.colors.white}
							backgroundColor={Theme.colors.lightGreen}
						>
							Voltar
						</Button>
					</div>
					<BoxCard>
						<CartCard
							quantity={1}
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<CartCard
							quantity={1}
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<CartCard
							quantity={1}
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<CartCard
							quantity={1}
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<CartCard
							quantity={1}
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
					</BoxCard>
				</Section>
			</>
		</Container>
	);
};

export default Cart;
