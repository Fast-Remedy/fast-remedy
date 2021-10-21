import React, { FormEvent, useState, useEffect } from 'react';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { validateCpf } from '../../../utils/validate';
import { FiChevronRight } from 'react-icons/fi';

import TitleBox from '../../../components/TitleBox';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import LoadingMessage from '../../../components/LoadingMessage';

import {
	Container,
	Section,
	BoxCard,
	Text,
	Title,
	Message,
	IncorrectMessage,
} from '../../../styles/customer/edit';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';
import api from '../../../services/api';

interface IUser {
	_id: string;
	nameCustomer: string;
	cpfCustomer: string;
	emailCustomer: string;
	phoneCustomer: string;
	registrationDateCustomer: string;
}

const Edit: React.FC = () => {
	const { setNavigationState } = useNavigation();

	useEffect(() => {
		setNavigationState({
			home: false,
			search: false,
			orders: false,
			profile: true,
		});
		getData();
		return () => {
			setUser({
				_id: '',
				nameCustomer: '',
				cpfCustomer: '',
				emailCustomer: '',
				phoneCustomer: '',
				registrationDateCustomer: '',
			});
			setNameCustomer('');
			setCpfCustomer('');
			setEmailCustomer('');
			setPhoneCustomer('');
		};
	}, []);

	const [personalData, setPersonalData] = useState(false);
	const [contactData, setContactData] = useState(false);
	const [passwordData, setPasswordData] = useState(false);

	const [isFetching, setIsFetching] = useState(true);
	const [isUpdating, setIsUpdating] = useState(false);

	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [isIncorrectMessageVisible, setIsIncorrectMessageVisible] = useState(false);
	const [message, setMessage] = useState('');
	const [isNameIncorrect, setIsNameIncorrect] = useState(false);
	const [isCpfIncorrect, setIsCpfIncorrect] = useState(false);
	const [isPhoneIncorrect, setIsPhoneIncorrect] = useState(false);
	const [isEmailIncorrect, setIsEmailIncorrect] = useState(false);
	const [isActualPasswordIncorrect, setIsActualPasswordIncorrect] = useState(false);
	const [isNewPasswordIncorrect, setIsNewPasswordIncorrect] = useState(false);

	const [user, setUser] = useState<IUser>({
		_id: '',
		nameCustomer: '',
		cpfCustomer: '',
		emailCustomer: '',
		phoneCustomer: '',
		registrationDateCustomer: '',
	});
	const [nameCustomer, setNameCustomer] = useState('');
	const [cpfCustomer, setCpfCustomer] = useState('');
	const [emailCustomer, setEmailCustomer] = useState('');
	const [phoneCustomer, setPhoneCustomer] = useState('');
	const [actualPasswordCustomer, setActualPasswordCustomer] = useState('');
	const [passwordCustomer, setPasswordCustomer] = useState('');
	const [confirmPasswordCustomer, setConfirmPasswordCustomer] = useState('');

	const getData = async () => {
		try {
			const { data } = await api.get(
				`/api/customers/${JSON.parse(localStorage.getItem('userData'))._id}`,
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
			);
			setUser(data);
			setNameCustomer(data.nameCustomer);
			setCpfCustomer(data.cpfCustomer);
			setEmailCustomer(data.emailCustomer);
			setPhoneCustomer(data.phoneCustomer);
			localStorage.setItem('userData', JSON.stringify(data));
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	const resetForm = () => {
		setNameCustomer(user.nameCustomer);
		setCpfCustomer(user.cpfCustomer);
		setEmailCustomer(user.emailCustomer);
		setPhoneCustomer(user.phoneCustomer);
	};

	const handleUpdate = async (e: FormEvent) => {
		e.preventDefault();

		const updateData = {
			nameCustomer,
			cpfCustomer: cpfCustomer.replace(/[^0-9]+/g, ''),
			emailCustomer,
			phoneCustomer: phoneCustomer.replace(/[^0-9]+/g, ''),
			registrationDateCustomer: user.registrationDateCustomer,
		};

		let isIncorrect = false;

		if (updateData.phoneCustomer.trim().length < 10) {
			setIsPhoneIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um número de celular válido!');
			isIncorrect = true;
		}
		if (nameCustomer.length < 5) {
			setIsNameIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('Insira um nome válido!');
			isIncorrect = true;
		}
		if (!isIncorrect) {
			try {
				setIsUpdating(true);
				await api.put(
					`/api/update/customers/${JSON.parse(localStorage.getItem('userData'))._id}`,
					updateData,
					{
						headers: {
							authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
						},
					}
				);
				setIsMessageVisible(true);
				setIsUpdating(false);
				getData();
				setTimeout(() => {
					setPersonalData(false);
					setContactData(false);
					setIsMessageVisible(false);
				}, 2000);
			} catch (error) {
				setIsUpdating(false);
				if (error.response.data.error.includes('cpf')) {
					setIsCpfIncorrect(true);
					setIsIncorrectMessageVisible(true);
					setMessage('Este CPF já está cadastrado!');
				}
				if (error.response.data.error.includes('email')) {
					setIsEmailIncorrect(true);
					setIsIncorrectMessageVisible(true);
					setMessage('Este email já está cadastrado!');
				}
			}
		}
	};

	const handleUpdatePassword = async (e: FormEvent) => {
		e.preventDefault();

		const loginData = {
			emailCustomer: user.emailCustomer,
			passwordCustomer: actualPasswordCustomer,
		};

		let isIncorrect = false;

		if (
			passwordCustomer.trim().length >= 8 &&
			passwordCustomer.trim() !== confirmPasswordCustomer.trim()
		) {
			setIsNewPasswordIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('As senhas não coincidem!');
			isIncorrect = true;
		}
		if (passwordCustomer.trim().length < 8) {
			setIsNewPasswordIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('A senha deve conter pelo menos 8 caracteres!');
			isIncorrect = true;
		}
		if (!isIncorrect) {
			try {
				setIsUpdating(true);
				const { data } = await api.post('/api/login/customers', loginData);
				localStorage.setItem('token', JSON.stringify(data.token));
				localStorage.setItem('userData', JSON.stringify(data.userList));

				setTimeout(() => {
					setPasswordData(false);
					setIsMessageVisible(false);
				}, 2000);
			} catch {
				setIsUpdating(false);
				setIsActualPasswordIncorrect(true);
				setIsIncorrectMessageVisible(true);
				setMessage('Senha atual incorreta!');
				return;
			}
			try {
				await api.patch(
					`/api/update/customers/password/${
						JSON.parse(localStorage.getItem('userData'))._id
					}`,
					{ _id: user._id, passwordCustomer },
					{
						headers: {
							authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
						},
					}
				);
				setIsMessageVisible(true);
				localStorage.removeItem('token');
				localStorage.removeItem('userData');
				localStorage.removeItem('cart');
				window.location.href = '/';
				setIsUpdating(false);
				setTimeout(() => {
					setPasswordData(false);
					setIsMessageVisible(false);
				}, 2000);
			} catch (error) {
				setIsUpdating(false);
				console.log(error);
			}
		}
	};

	useEffect(() => {
		setIsNameIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [nameCustomer]);

	useEffect(() => {
		setIsCpfIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [cpfCustomer]);

	useEffect(() => {
		setIsPhoneIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [phoneCustomer]);

	useEffect(() => {
		setIsEmailIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [emailCustomer]);

	useEffect(() => {
		setIsActualPasswordIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [actualPasswordCustomer]);

	useEffect(() => {
		setIsNewPasswordIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [passwordCustomer, confirmPasswordCustomer]);

	return (
		<Container>
			{isFetching ? (
				<Section>
					<motion.div
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<div className='title'>
							<TitleBox title='Dados' />
						</div>
						<BoxCard
							style={{
								backgroundColor: '#fff',
								justifyContent: 'center',
								padding: '1rem',
							}}
						>
							<LoadingMessage />
						</BoxCard>
					</motion.div>
				</Section>
			) : (
				<>
					{!personalData && !contactData && !passwordData && (
						<Section>
							<motion.div
								initial={{ opacity: 0 }}
								exit={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<div className='title'>
									<TitleBox title='Dados' />
								</div>
								<ButtonsContainer>
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
								</ButtonsContainer>
								<BoxCard onClick={() => setPersonalData(!personalData)}>
									<Text>
										<Title>Dados Pessoais</Title>
									</Text>
									<FiChevronRight size={30} style={{ color: '#212121' }} />
								</BoxCard>
								<BoxCard onClick={() => setContactData(!contactData)}>
									<Text>
										<Title>Contato</Title>
									</Text>
									<FiChevronRight size={30} style={{ color: '#212121' }} />
								</BoxCard>
								<BoxCard onClick={() => setPasswordData(!passwordData)}>
									<Text>
										<Title>Senha</Title>
									</Text>
									<FiChevronRight size={30} style={{ color: '#212121' }} />
								</BoxCard>
							</motion.div>
						</Section>
					)}
					{personalData && (
						<Section>
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<div className='title'>
										<TitleBox title='Dados Pessoais' />
									</div>
									<ButtonsContainer>
										<Button
											className='icon back'
											color={Theme.colors.black}
											backgroundColor={Theme.colors.white}
											onClick={() => {
												setPersonalData(!personalData);
												resetForm();
											}}
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
									</ButtonsContainer>
									<Form onSubmit={handleUpdate}>
										<>
											<InputField
												label='Nome Completo'
												placeholder='Antônio da Silva'
												required={true}
												value={nameCustomer}
												onChange={e => setNameCustomer(e.target.value)}
												isIncorrect={isNameIncorrect}
											/>
											<InputField
												className='disabled'
												label='CPF'
												mask='999.999.999-99'
												placeholder='123.456.789-10'
												required={true}
												value={cpfCustomer}
												onChange={e => setCpfCustomer(e.target.value)}
												isIncorrect={isCpfIncorrect}
												disabled
												style={{ opacity: 0.6 }}
											/>
											<ButtonsContainer style={{ marginTop: '1rem' }}>
												<Button
													width='100%'
													className='icon moreRight margin white'
													type='submit'
													color={Theme.colors.white}
													backgroundColor={Theme.colors.green}
													isLoading={isUpdating}
												>
													{!isUpdating ? (
														<>
															<img
																src='/images/icons/save.svg'
																alt='Salvar'
															/>
															Salvar
														</>
													) : (
														'Atualizando...'
													)}
												</Button>
											</ButtonsContainer>
											<AnimatePresence>
												{isMessageVisible && (
													<motion.div
														initial={{ opacity: 0 }}
														exit={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 0.3 }}
													>
														<Message>Cadastro atualizado!</Message>
													</motion.div>
												)}
											</AnimatePresence>
											<AnimatePresence>
												{isIncorrectMessageVisible && (
													<motion.div
														initial={{ opacity: 0 }}
														exit={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 0.3 }}
														style={{ marginTop: '1.2rem' }}
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
						</Section>
					)}
					{contactData && (
						<Section>
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<div className='title'>
										<TitleBox title='Contato' />
									</div>
									<ButtonsContainer>
										<Button
											className='icon back'
											color={Theme.colors.black}
											backgroundColor={Theme.colors.white}
											onClick={() => {
												setContactData(!contactData);
												resetForm();
											}}
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
									</ButtonsContainer>
									<Form onSubmit={handleUpdate}>
										<>
											<InputField
												label='Celular'
												mask='(99) 99999-9999'
												placeholder='(24) 99999-8888'
												value={phoneCustomer}
												onChange={e => setPhoneCustomer(e.target.value)}
												isIncorrect={isPhoneIncorrect}
											/>
											<InputField
												label='Email'
												placeholder='antonio@email.com'
												type='email'
												required={true}
												value={emailCustomer}
												onChange={e => setEmailCustomer(e.target.value)}
												isIncorrect={isEmailIncorrect}
											/>
											<ButtonsContainer style={{ marginTop: '1rem' }}>
												<Button
													width='100%'
													className='icon moreRight margin white'
													type='submit'
													color={Theme.colors.white}
													backgroundColor={Theme.colors.green}
													isLoading={isUpdating}
												>
													{!isUpdating ? (
														<>
															<img
																src='/images/icons/save.svg'
																alt='Salvar'
															/>
															Salvar
														</>
													) : (
														'Atualizando...'
													)}
												</Button>
											</ButtonsContainer>
											<AnimatePresence>
												{isMessageVisible && (
													<motion.div
														initial={{ opacity: 0 }}
														exit={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 0.3 }}
													>
														<Message>Cadastro atualizado!</Message>
													</motion.div>
												)}
											</AnimatePresence>
											<AnimatePresence>
												{isIncorrectMessageVisible && (
													<motion.div
														initial={{ opacity: 0 }}
														exit={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 0.3 }}
														style={{ marginTop: '1.2rem' }}
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
						</Section>
					)}
					{passwordData && (
						<Section>
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<div className='title'>
										<TitleBox title='Senha' />
									</div>
									<ButtonsContainer>
										<Button
											className='icon back'
											color={Theme.colors.black}
											backgroundColor={Theme.colors.white}
											onClick={() => {
												setPasswordData(!passwordData);
												resetForm();
											}}
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
									</ButtonsContainer>
									<Form onSubmit={handleUpdatePassword}>
										<>
											<InputField
												label='Senha Atual'
												placeholder='**********'
												type='password'
												required={true}
												value={actualPasswordCustomer}
												onChange={e =>
													setActualPasswordCustomer(e.target.value)
												}
												isIncorrect={isActualPasswordIncorrect}
											/>
											<InputField
												label='Nova Senha'
												placeholder='**********'
												type='password'
												required={true}
												value={passwordCustomer}
												onChange={e => setPasswordCustomer(e.target.value)}
												isIncorrect={isNewPasswordIncorrect}
											/>
											<InputField
												label='Confirmar Nova Senha'
												placeholder='**********'
												type='password'
												required={true}
												value={confirmPasswordCustomer}
												onChange={e =>
													setConfirmPasswordCustomer(e.target.value)
												}
												isIncorrect={isNewPasswordIncorrect}
											/>
											<ButtonsContainer style={{ marginTop: '1rem' }}>
												<Button
													width='100%'
													className='icon moreRight margin white'
													type='submit'
													color={Theme.colors.white}
													backgroundColor={Theme.colors.green}
													isLoading={isUpdating}
												>
													{!isUpdating ? (
														<>
															<img
																src='/images/icons/save.svg'
																alt='Salvar'
															/>
															Salvar
														</>
													) : (
														'Atualizando...'
													)}
												</Button>
											</ButtonsContainer>
											<AnimatePresence>
												{isMessageVisible && (
													<motion.div
														initial={{ opacity: 0 }}
														exit={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 0.3 }}
													>
														<Message>Cadastro atualizado!</Message>
													</motion.div>
												)}
											</AnimatePresence>
											<AnimatePresence>
												{isIncorrectMessageVisible && (
													<motion.div
														initial={{ opacity: 0 }}
														exit={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ duration: 0.3 }}
														style={{ marginTop: '1.2rem' }}
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
						</Section>
					)}
				</>
			)}
		</Container>
	);
};

export default Edit;
