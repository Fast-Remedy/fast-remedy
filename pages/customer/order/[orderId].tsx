import React, { useState, useEffect } from 'react';
import router, { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
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

import { useNavigation } from '../../../contexts/NavigationContext';

const Order: React.FC = () => {
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

	const { query } = useRouter();

	const [status] = useState('inProgress');
	const [isCancelMenuVisible, setIsCancelMenuVisible] = useState(false);
	const [isMessageVisible, setIsMessageVisible] = useState(false);

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
				{!isCancelMenuVisible ? (
					<motion.div
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<Section>
							<TitleBox title='Detalhes do Pedido' />
							<ButtonsContainer>
								<>
									<Button
										className='icon back'
										color={Theme.colors.black}
										backgroundColor={Theme.colors.white}
										onClick={() => router.back()}
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
									description='Maleato de Dexclorfeniramina 2mg/5ml Cimed Solução Oral Sabor Laranja com 120ml'
									price={13.45}
									src='/images/logos/remedy2.jpg'
								/>
								<OrderCard
									quantity={1}
									store='Drogaria Moderna'
									description='Aparelho de Barbear MACH3 Gillette - 1 Unidade'
									price={31.99}
									src='/images/logos/remedy3.jpg'
								/>
							</BoxCard>
							<BoxCard>
								<FinishCard>
									<div className='total'>
										<span>Subtotal:</span>
										<span className='info'>R$ 51,13</span>
									</div>
									<div className='total'>
										<span>Taxa de entrega:</span>
										<span className='info'>R$ 5,00</span>
									</div>
									<div className='total'>
										<span>Total:</span>
										<span>R$ 56,13</span>
									</div>
								</FinishCard>
								<FinishCard>
									<Info>
										<span>Entregar em:</span>
										<span className='info'>
											Avenida Amaral Peixoto, Nº 45, Centro, Volta Redonda -
											RJ
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
											className='icon margin right'
											width='100%'
											height='50px'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
											onClick={() => setIsCancelMenuVisible(true)}
										>
											<div>
												<span>
													<svg
														fill='currentColor'
														viewBox='0 0 20 20'
														xmlns='http://www.w3.org/2000/svg'
														style={{
															marginRight: '0.2rem',
															marginBottom: '0.1rem',
														}}
													>
														<path
															fillRule='evenodd'
															d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
															clipRule='evenodd'
														/>
													</svg>
													Cancelar pedido
												</span>
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
							exit={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<Section>
								<TitleBox title='Cancelar Pedido' />
								<CancelCard>
									<span>Deseja realmente cancelar o pedido?</span>
									<div className='buttons'>
										<Button
											className='icon back'
											width='10rem'
											color={Theme.colors.black}
											backgroundColor={Theme.colors.gray}
											onClick={() => setIsCancelMenuVisible(false)}
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
										<Button
											className='icon margin'
											width='10rem'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.red}
											onClick={handleCancel}
										>
											<svg
												fill='currentColor'
												viewBox='0 0 20 20'
												xmlns='http://www.w3.org/2000/svg'
												style={{
													marginRight: '0.2rem',
													marginBottom: '0.1rem',
												}}
											>
												<path
													fillRule='evenodd'
													d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
													clipRule='evenodd'
												/>
											</svg>
											Cancelar
										</Button>
									</div>
								</CancelCard>
								<AnimatePresence>
									{isMessageVisible && (
										<motion.div
											initial={{ opacity: 0 }}
											exit={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
										>
											<Message>Pedido cancelado!</Message>
										</motion.div>
									)}
								</AnimatePresence>
							</Section>
						</motion.div>
					</AnimatePresence>
				)}
			</>
		</Container>
	);
};

export default Order;
