import React from 'react';
import Link from 'next/link';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CustomerHeader from '../../../components/CustomerHeader';
import CartCard from '../../../components/CartCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';

import { Section, BoxCard, FinishCard } from '../../../styles/customer/cart';
import Theme from '../../../styles/theme';

const Cart: React.FC = () => {
	const goBack = () => {
		window.history.back();
	};

	const handleBuy = () => {
		window.location.href = '/customer/success';
	};

	return (
		<Container>
			<>
				<CustomerHeader />
				<Section>
					<TitleBox title='Carrinho' />
					<ButtonsContainer>
						<>
							<Button
								className='icon back'
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
								onClick={goBack}
							>
								<svg
									className='icon'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
										clipRule='evenodd'
									/>
								</svg>
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
							<Link href='/customer/address' passHref>
								<a>
									<Button
										width='100%'
										height='auto'
										color={Theme.colors.black}
										backgroundColor={Theme.colors.white}
									>
										<div>
											<span>Entregar em:</span>
											<span className='info'>
												Avenida Amaral Peixoto, Nº 45, Centro, Volta Redonda -
												RJ
											</span>
										</div>
									</Button>
								</a>
							</Link>
						</FinishCard>
						<FinishCard>
							<Link href='/customer/payment' passHref>
								<a>
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
								</a>
							</Link>
						</FinishCard>
						<FinishCard>
							<Button
                                className='icon margin'
								width='100%'
								height='80px'
								color={Theme.colors.white}
								backgroundColor={Theme.colors.green}
								onClick={handleBuy}
							>
								<div>
									<span>
										<svg
											className='w-6 h-6'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
                                            style={{marginRight: '0.6rem'}}
										>
											<path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
										</svg>
										Finalizar compra
									</span>
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
