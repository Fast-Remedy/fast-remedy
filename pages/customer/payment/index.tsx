import React, { FormEvent, useState, useEffect } from 'react';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import PaymentCard from '../../../components/PaymentCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import SelectField from '../../../components/SelectField';

import { Section, BoxCard, Line } from '../../../styles/customer/payment';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

const Payment: React.FC = () => {
	const { setNavigationState } = useNavigation();

	useEffect(
		() =>
			setNavigationState({
				home: false,
				search: false,
				orders: false,
				profile: true,
			}),
		[]
	);

	const [newPaymentVisible, setNewPaymentVisible] = useState(false);
	const [paymentType, setPaymentType] = useState('');

	const handleSavePayment = (e: FormEvent) => {
		setNewPaymentVisible(!newPaymentVisible);
	};

	return (
		<Container>
			<>
				{!newPaymentVisible ? (
					<Section>
						<TitleBox title='Pagamento' />
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
								<Button
									className='icon margin'
									color={Theme.colors.black}
									backgroundColor={Theme.colors.white}
									onClick={() => setNewPaymentVisible(!newPaymentVisible)}
								>
									<svg
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
											clipRule='evenodd'
										/>
									</svg>
									Novo
								</Button>
							</>
						</ButtonsContainer>
						<BoxCard style={{ marginTop: '0' }}>
							<motion.div
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<BoxCard>
									<PaymentCard
										className='active'
										type='Crédito'
										processor='MasterCard'
										finalCardNumbers='9115'
									/>
									<PaymentCard
										type='Crédito'
										processor='Visa'
										finalCardNumbers='1457'
									/>
								</BoxCard>
							</motion.div>
						</BoxCard>
					</Section>
				) : (
					<Section>
						<TitleBox title='Pagamento' />
						<ButtonsContainer>
							<>
								<Button
									className='icon back'
									color={Theme.colors.black}
									backgroundColor={Theme.colors.white}
									onClick={() => setNewPaymentVisible(!newPaymentVisible)}
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
						<BoxCard style={{ marginTop: '0' }}>
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<Form onSubmit={handleSavePayment}>
										<>
											<SelectField
												label='Tipo'
												value={paymentType}
												onChange={e => setPaymentType(e.target.value)}
											>
												<option value='Crédito'>Crédito</option>
												<option value='Débito'>Débito</option>
											</SelectField>
											<InputField
												label='Número do Cartão'
												placeholder='Ex. 9999-9999-9999-9999'
											/>
											<Line>
												<InputField
													label='Mês de Validade'
													placeholder='Ex. 12'
												/>
												<InputField
													label='Ano de Validade'
													placeholder='Ex. 22'
												/>
											</Line>
											<InputField
												label='Código de Segurança (Número de trás do cartão)'
												placeholder='Ex. 123'
											/>
											<InputField
												label='Nome do Titular'
												placeholder='Ex. Antônio Rocha'
											/>
											<InputField
												label='CPF do Titular'
												placeholder='Ex. 123.456.789-10'
											/>
											<ButtonsContainer
												style={{
													marginTop: '1rem',
													justifyContent: 'flex-end',
												}}
											>
												<>
													<Button
														width='100%'
														className='icon moreRight margin white'
														type='submit'
														color={Theme.colors.white}
														backgroundColor={Theme.colors.green}
													>
														<img
															src='/images/icons/save.svg'
															alt='Salvar'
														/>
														Salvar
													</Button>
												</>
											</ButtonsContainer>
										</>
									</Form>
								</motion.div>
							</AnimatePresence>
						</BoxCard>
					</Section>
				)}
			</>
		</Container>
	);
};

export default Payment;
