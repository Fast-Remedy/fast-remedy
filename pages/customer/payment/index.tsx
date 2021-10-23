import React, { FormEvent, useState, useEffect } from 'react';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import { validateCpf } from '../../../utils/validate';
import api from '../../../services/api';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import PaymentCard from '../../../components/PaymentCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import SelectField from '../../../components/SelectField';
import LoadingMessage from '../../../components/LoadingMessage';

import {
	Section,
	BoxCard,
	Line,
	Message,
	IncorrectMessage,
} from '../../../styles/customer/payment';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

interface ICard {
	_id: string;
	idCustomer: string;
	cardTypeCustomers: string;
	cardNumberCustomers: string;
	cardExpirationDateCustomers: string;
	cardCvvCustomer: string;
	cardOwnerNameCustomer: string;
	cardOwnerCpfCustomer: string;
	mainCardCustomer: boolean;
}

const Payment: React.FC = () => {
	const { setNavigationState } = useNavigation();

	const [cards, setCards] = useState<ICard[]>([]);

	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [message, setMessage] = useState('');
	const [isCardNumberCustomersIncorrect, setIsCardNumberCustomersIncorrect] = useState(false);
	const [isCardExpirationMonthCustomersIncorrect, setIsCardExpirationMonthCustomersIncorrect] =
		useState(false);
	const [isCardExpirationYearCustomersIncorrect, setIsCardExpirationYearCustomersIncorrect] =
		useState(false);
	const [isCardCvvCustomerIncorrect, setIsCardCvvCustomerIncorrect] = useState(false);
	const [isCardOwnerNameCustomerIncorrect, setIsCardOwnerNameCustomerIncorrect] = useState(false);
	const [isCardOwnerCpfCustomerIncorrect, setIsCardOwnerCpfCustomerIncorrect] = useState(false);

	const [isFetching, setIsFetching] = useState(false);

	const [newPaymentVisible, setNewPaymentVisible] = useState(false);

	const [cardTypeCustomers, setCardTypeCustomers] = useState('Crédito');
	const [cardNumberCustomers, setCardNumberCustomers] = useState('');
	const [cardExpirationMonthCustomers, setCardExpirationMonthCustomers] = useState('');
	const [cardExpirationYearCustomers, setCardExpirationYearCustomers] = useState('');
	const [cardCvvCustomer, setCardCvvCustomer] = useState('');
	const [cardOwnerNameCustomer, setCardOwnerNameCustomer] = useState('');
	const [cardOwnerCpfCustomer, setCardOwnerCpfCustomer] = useState('');

	useEffect(() => {
		setNavigationState({
			home: false,
			search: false,
			orders: false,
			profile: true,
		});
		getCards();
		return () => {
			setCards([]);
		};
	}, []);

	const getCards = async () => {
		setIsFetching(true);
		try {
			const { data } = await api.get(
				`/api/card/customers/${JSON.parse(localStorage.getItem('userData'))._id}`,
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
			);
			setCards(data);
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	const setAsMainCard = async (index: number) => {
		const allCards = [...cards];
		const cardToEdit = cards[index];
		const newCard = { ...cardToEdit, mainCardCustomer: true };
		const editedCards = allCards.map(card => ({
			_id: card._id,
			idCustomer: card.idCustomer,
			cardTypeCustomers: card.cardTypeCustomers,
			cardNumberCustomers: card.cardNumberCustomers,
			cardExpirationDateCustomers: card.cardExpirationDateCustomers,
			cardCvvCustomer: card.cardCvvCustomer,
			cardOwnerNameCustomer: card.cardOwnerNameCustomer,
			cardOwnerCpfCustomer: card.cardOwnerCpfCustomer,
			mainCardCustomer: false,
		}));
		editedCards[index] = newCard;
		try {
			setCards(editedCards);
			editedCards.forEach(async card => {
				await api.put(`/api/update/card/customers/${card._id}`, card, {
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				});
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteCard = async (index: number) => {
		const allCards = [...cards];
		const cardToDelete = cards[index];
		allCards.splice(index, 1);
		try {
			setCards(allCards);
			await api.delete(`/api/delete/card/customers/${cardToDelete._id}`, {
				headers: {
					authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleSaveCard = async (e: FormEvent) => {
		e.preventDefault();

		const newCard = {
			cardTypeCustomers,
			cardNumberCustomers,
			cardExpirationDateCustomers: `${cardExpirationMonthCustomers}/${cardExpirationYearCustomers}`,
			cardCvvCustomer,
			cardOwnerNameCustomer,
			cardOwnerCpfCustomer: cardOwnerCpfCustomer.replace(/[^0-9]+/g, ''),
			mainCardCustomer: true,
			idCustomer: JSON.parse(localStorage.getItem('userData'))._id,
		};

		let isIncorrect = false;

		if (!validateCpf(newCard.cardOwnerCpfCustomer)) {
			setIsCardOwnerCpfCustomerIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um CPF válido!');
			isIncorrect = true;
		}
		if (newCard.cardOwnerCpfCustomer.trim().length < 11) {
			setIsCardOwnerCpfCustomerIncorrect(true);
			setIsMessageVisible(true);
			setMessage('O CPF deve conter 11 dígitos!');
			isIncorrect = true;
		}
		if (newCard.cardOwnerNameCustomer.trim().length < 3) {
			setIsCardOwnerNameCustomerIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um nome válido!');
			isIncorrect = true;
		}
		if (newCard.cardCvvCustomer.length !== 3) {
			setIsCardCvvCustomerIncorrect(true);
			setIsMessageVisible(true);
			setMessage('O código de segurança deve conter 3 dígitos!');
			isIncorrect = true;
		}
		if (cardExpirationYearCustomers.length < 2) {
			setIsCardExpirationYearCustomersIncorrect(true);
			setIsMessageVisible(true);
			setMessage('O ano deve conter 2 dígitos!');
			isIncorrect = true;
		}
		if (Number(cardExpirationYearCustomers) < 20) {
			setIsCardExpirationYearCustomersIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um ano válido!');
			isIncorrect = true;
		}
		if (cardExpirationMonthCustomers.length < 2) {
			setIsCardExpirationMonthCustomersIncorrect(true);
			setIsMessageVisible(true);
			setMessage('O mês deve conter 2 dígitos!');
			isIncorrect = true;
		}
		if (Number(cardExpirationMonthCustomers) > 12) {
			setIsCardExpirationMonthCustomersIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um mês válido!');
			isIncorrect = true;
		}
		if (newCard.cardNumberCustomers.replace(/ /g, '').length < 16) {
			setIsCardNumberCustomersIncorrect(true);
			setIsMessageVisible(true);
			setMessage('O número do cartão deve conter 16 dígitos!');
			isIncorrect = true;
		}
		if (!isIncorrect) {
			try {
				setIsFetching(true);
				const allCards = [...cards];
				const editedCards = allCards.map(card => ({
					_id: card._id,
					idCustomer: card.idCustomer,
					cardTypeCustomers: card.cardTypeCustomers,
					cardNumberCustomers: card.cardNumberCustomers,
					cardExpirationDateCustomers: card.cardExpirationDateCustomers,
					cardCvvCustomer: card.cardCvvCustomer,
					cardOwnerNameCustomer: card.cardOwnerNameCustomer,
					cardOwnerCpfCustomer: card.cardOwnerCpfCustomer,
					mainCardCustomer: false,
				}));
				editedCards.forEach(async card => {
					await api.put(`/api/update/card/customers/${card._id}`, card, {
						headers: {
							authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
						},
					});
				});
				await api.post('/api/register/card/customers', newCard, {
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				});
				setIsFetching(false);
				clearForm();
				setNewPaymentVisible(!newPaymentVisible);
				getCards();
			} catch (error) {
				setIsFetching(false);
				setIsMessageVisible(true);
				setMessage('Verifique os campos e tente novamente!');
			}
		}
		scroll.scrollToBottom();
	};

	const clearForm = () => {
		setCardTypeCustomers('Crédito');
		setCardNumberCustomers('');
		setCardExpirationMonthCustomers('');
		setCardExpirationYearCustomers('');
		setCardCvvCustomer('');
		setCardOwnerNameCustomer('');
		setCardOwnerCpfCustomer('');
	};

	useEffect(() => {
		setIsCardNumberCustomersIncorrect(false);
		setIsMessageVisible(false);
	}, [cardNumberCustomers]);

	useEffect(() => {
		setIsCardExpirationMonthCustomersIncorrect(false);
		setIsMessageVisible(false);
	}, [cardExpirationMonthCustomers]);

	useEffect(() => {
		setIsCardExpirationYearCustomersIncorrect(false);
		setIsMessageVisible(false);
	}, [cardExpirationYearCustomers]);

	useEffect(() => {
		setIsCardCvvCustomerIncorrect(false);
		setIsMessageVisible(false);
	}, [cardCvvCustomer]);

	useEffect(() => {
		setIsCardOwnerNameCustomerIncorrect(false);
		setIsMessageVisible(false);
	}, [cardOwnerNameCustomer]);

	useEffect(() => {
		setIsCardOwnerCpfCustomerIncorrect(false);
		setIsMessageVisible(false);
	}, [cardOwnerCpfCustomer]);

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
									onClick={() => {
										clearForm();
										setNewPaymentVisible(!newPaymentVisible);
									}}
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
						<span className='info'>
							Clique em um cartão para defini-lo como principal
						</span>
						{isFetching ? (
							<BoxCard style={{ backgroundColor: '#fff' }}>
								<LoadingMessage />
							</BoxCard>
						) : (
							<BoxCard style={{ marginTop: '0' }}>
								<motion.div
									initial={{ opacity: 0 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									{cards.length === 0 ? (
										<Message style={{ marginTop: '1.1rem' }}>
											Nenhum cartão cadastrado!
										</Message>
									) : (
										<BoxCard>
											{cards.map((card, index) => (
												<PaymentCard
													key={card._id}
													isActive={card.mainCardCustomer}
													type={card.cardTypeCustomers}
													cardNumber={card.cardNumberCustomers}
													onClick={() => {
														if (!card.mainCardCustomer) {
															setAsMainCard(index);
														}
													}}
													deleteFunction={() => {
														handleDeleteCard(index);
													}}
												/>
											))}
										</BoxCard>
									)}
								</motion.div>
							</BoxCard>
						)}
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
									<Form onSubmit={handleSaveCard}>
										<>
											<SelectField
												label='Tipo'
												value={cardTypeCustomers}
												onChange={e => setCardTypeCustomers(e.target.value)}
											>
												<option value='Crédito'>Crédito</option>
												<option value='Débito'>Débito</option>
											</SelectField>
											<InputField
												label='Número do Cartão'
												mask='9999 9999 9999 9999'
												placeholder='Ex. 9999 9999 9999 9999'
												required
												value={cardNumberCustomers}
												onChange={e =>
													setCardNumberCustomers(e.target.value)
												}
												isIncorrect={isCardNumberCustomersIncorrect}
											/>
											<Line>
												<InputField
													label='Mês de Validade'
													mask='99'
													placeholder='Ex. 12'
													required
													value={cardExpirationMonthCustomers}
													onChange={e =>
														setCardExpirationMonthCustomers(
															e.target.value
														)
													}
													isIncorrect={
														isCardExpirationMonthCustomersIncorrect
													}
												/>
												<InputField
													label='Ano de Validade'
													mask='99'
													placeholder='Ex. 22'
													required
													value={cardExpirationYearCustomers}
													onChange={e =>
														setCardExpirationYearCustomers(
															e.target.value
														)
													}
													isIncorrect={
														isCardExpirationYearCustomersIncorrect
													}
												/>
											</Line>
											<InputField
												label='Código de Segurança (Número de trás do cartão)'
												mask='999'
												placeholder='Ex. 123'
												required
												value={cardCvvCustomer}
												onChange={e => setCardCvvCustomer(e.target.value)}
												isIncorrect={isCardCvvCustomerIncorrect}
											/>
											<InputField
												label='Nome do Titular'
												placeholder='Ex. Antônio Rocha'
												required
												value={cardOwnerNameCustomer}
												onChange={e =>
													setCardOwnerNameCustomer(e.target.value)
												}
												isIncorrect={isCardOwnerNameCustomerIncorrect}
											/>
											<InputField
												label='CPF do Titular'
												mask='999.999.999-99'
												placeholder='Ex. 123.456.789-10'
												required
												value={cardOwnerCpfCustomer}
												onChange={e =>
													setCardOwnerCpfCustomer(e.target.value)
												}
												isIncorrect={isCardOwnerCpfCustomerIncorrect}
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
														isLoading={isFetching}
													>
														{!isFetching && (
															<img
																src='/images/icons/save.svg'
																alt='Salvar'
															/>
														)}
														{isFetching ? 'Carregando...' : 'Salvar'}
													</Button>
												</>
											</ButtonsContainer>
											<AnimatePresence>
												{isMessageVisible && (
													<motion.div
														initial={{ opacity: 0 }}
														exit={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 0.3 }}
													>
														<IncorrectMessage>
															{message}
														</IncorrectMessage>
													</motion.div>
												)}
											</AnimatePresence>
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
