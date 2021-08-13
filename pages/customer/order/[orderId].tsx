import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CustomerHeader from '../../../components/CustomerHeader';
import OrderCard from '../../../components/OrderCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';

import {
	Section,
	DetailsCard,
	BoxCard,
	Text,
	Store,
	Name,
	Status,
	Description,
	Span,
	Date,
	FinishCard,
	Info,
	CancelCard,
	Message,
} from '../../../styles/customer/order';
import Theme from '../../../styles/theme';

const Order: React.FC = () => {
	const { query } = useRouter();

	const [status] = useState('inProgress');
	const [isCancelMenuVisible, setIsCancelMenuVisible] = useState(false);
	const [isMessageVisible, setIsMessageVisible] = useState(false);

	const goBack = () => {
		window.history.back();
	};

	const handleCancel = async () => {
		// set data to back end to cancel order
        setIsMessageVisible(true);

		setTimeout(() => {
			setIsCancelMenuVisible(false);
			setIsMessageVisible(false);
		}, 2000);
	};

	return (
		<Container>
			<>
				<CustomerHeader />
				{!isCancelMenuVisible ? (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<Section>
							<TitleBox title='Detalhes do Pedido' />
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
							<DetailsCard>
								<Text>
									<Store>
										<img
											src='/images/logos/drogaria-moderna.png'
											alt='Drogaria Moderna'
										/>
										<Name>Drogaria Moderna</Name>
									</Store>
									<Status>
										<Description>
											Status:
											{status === 'inProgress' && (
												<Span className='in-progress'>
													<svg
														fill='none'
														stroke='#212121'
														viewBox='0 0 24 24'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='2'
															d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
														/>
													</svg>
													Em andamento
												</Span>
											)}
											{status === 'finished' && (
												<Span className='finished'>
													<svg
														fill='none'
														stroke='#00c2b2'
														viewBox='0 0 24 24'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='2'
															d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
														/>
													</svg>
													Concluído
												</Span>
											)}
											{status === 'canceled' && (
												<Span className='canceled'>
													<svg
														fill='none'
														stroke='#e70101'
														viewBox='0 0 24 24'
														xmlns='http://www.w3.org/2000/svg'
													>
														<path
															strokeLinecap='round'
															strokeLinejoin='round'
															strokeWidth='2'
															d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
														/>
													</svg>
													Cancelado
												</Span>
											)}
										</Description>
									</Status>
									<Date>Quarta-feira, 11/08/2021 às 19h41</Date>
								</Text>
							</DetailsCard>
							<BoxCard>
								<OrderCard
									quantity={1}
									store='Drogaria Moderna'
									description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
									price={5.69}
									src='/images/logos/remedy.svg'
								/>
								<OrderCard
									quantity={1}
									store='Drogaria Moderna'
									description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
									price={5.69}
									src='/images/logos/remedy.svg'
								/>
								<OrderCard
									quantity={1}
									store='Drogaria Moderna'
									description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
									price={5.69}
									src='/images/logos/remedy.svg'
								/>
								<OrderCard
									quantity={1}
									store='Drogaria Moderna'
									description='Dipirona Sódica 500mg Genérico Medley 10 Comprimidos'
									price={5.69}
									src='/images/logos/remedy.svg'
								/>
								<OrderCard
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
									<div className='total'>
										<span>Total:</span>
										<span>R$ 11,50</span>
									</div>
								</FinishCard>
								<FinishCard>
									<Info>
										<span>Entregar em:</span>
										<span className='info'>
											Avenida Amaral Peixoto, Nº 45, Centro, Volta Redonda - RJ
										</span>
									</Info>
								</FinishCard>
								<FinishCard>
									<Info>
										<span>Forma de Pagamento:</span>
										<span className='info'>
											Crédito - Mastercard (final 9115)
										</span>
									</Info>
								</FinishCard>
								{status === 'inProgress' && (
									<FinishCard>
										<Button
											width='100%'
											height='50px'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
											onClick={() => setIsCancelMenuVisible(true)}
										>
											<div>
												<span>Cancelar pedido</span>
											</div>
										</Button>
									</FinishCard>
								)}
							</BoxCard>
						</Section>
					</motion.div>
				) : (
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<Section>
								<TitleBox title='Cancelar Pedido' />
								<CancelCard>
									<span>Deseja realmente cancelar o pedido?</span>
									<div className='buttons'>
										<Button
											color={Theme.colors.black}
											backgroundColor={Theme.colors.gray}
											onClick={() => setIsCancelMenuVisible(false)}
										>
											Voltar
										</Button>
										<Button
											color={Theme.colors.white}
											backgroundColor={Theme.colors.red}
											onClick={handleCancel}
										>
											Cancelar
										</Button>
									</div>
								</CancelCard>
								{isMessageVisible && (
									<AnimatePresence>
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
										>
											<Message>Pedido cancelado!</Message>
										</motion.div>
									</AnimatePresence>
								)}
							</Section>
						</motion.div>
					</AnimatePresence>
				)}
			</>
		</Container>
	);
};

export default Order;
