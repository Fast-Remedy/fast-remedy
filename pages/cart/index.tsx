import React from 'react';
import Container from '../../components/Container';
import TitleBox from '../../components/TitleBox';
import Header from '../../components/Header';
import CartCard from '../../components/CartCard';
import ButtonsContainer from '../../components/ButtonsContainer';
import Button from '../../components/Button';
import { Section, BoxCard, FinishCard } from '../../styles/cart';
import Theme from '../../styles/theme';

const Cart: React.FC = () => {
	const goBack = () => {
		window.history.back();
	};

	return (
		<Container>
			<>
				<Header />
				<Section>
					<TitleBox title='Carrinho' />
					<ButtonsContainer>
						<>
							<Button
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
								onClick={goBack}
							>
								Voltar
							</Button>
						</>
					</ButtonsContainer>
					<BoxCard>
						<CartCard
							quantity={1}
							store='Drogaria Moderna'
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<CartCard
							quantity={1}
							store='Drogaria Moderna'
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<CartCard
							quantity={1}
							store='Drogaria Moderna'
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<CartCard
							quantity={1}
							store='Drogaria Moderna'
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
						<CartCard
							quantity={1}
							store='Drogaria Moderna'
							description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
							price={5.69}
							src='/images/logos/remedy.svg'
						/>
					</BoxCard>
					<BoxCard>
						<FinishCard>
							<div className='total'>
								<span>Subtotal:</span>
								<span className='info'>R$ 6,50</span>
							</div>
							<div className='total'>
								<span>Taxa de entrega:</span>
								<span className='info'>R$ 5,00</span>
							</div>
						</FinishCard>
						<FinishCard>
							<Button
								width='100%'
								height='auto'
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
							>
								<div>
									<span>Entregar em:</span>
									<span className='info'>
										Avenida Amaral Peixoto, Nº 45, Centro, Volta Redonda - RJ
									</span>
								</div>
							</Button>
						</FinishCard>
						<FinishCard>
							<Button
								width='100%'
								height='auto'
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
							>
								<div>
									<span>Forma de Pagamento:</span>
									<span className='info'>
										Crédito - Mastercard (final 9115)
									</span>
								</div>
							</Button>
						</FinishCard>
						<FinishCard>
							<Button
								width='100%'
								height='80px'
								color={Theme.colors.white}
								backgroundColor={Theme.colors.green}
							>
								<div>
									<span>Finalizar compra</span>
									<span className='info'>Total: R$ 11,50</span>
								</div>
							</Button>
						</FinishCard>
					</BoxCard>
				</Section>
			</>
		</Container>
	);
};

export default Cart;
