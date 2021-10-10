import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../../services/api';

import TitleBox from '../../../components/TitleBox';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import InstallMessage from '../../../components/InstallMessage';

import {
	Container,
	Header,
	Section,
	LogoImage,
	PasswordRecover,
	Message,
} from '../../../styles/customer/login';

import Theme from '../../../styles/theme';

const Login: React.FC = () => {
	const [isLoginPageVisible, setIsLoginPageVisible] = useState(true);

	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [message, setMessage] = useState('');
	const [isEmailLoginIncorrect, setIsEmailLoginIncorrect] = useState(false);
	const [isPasswordLoginIncorrect, setIsPasswordLoginIncorrect] = useState(false);
	const [isNameIncorrect, setIsNameIncorrect] = useState(false);
	const [isCpfIncorrect, setIsCpfIncorrect] = useState(false);
	const [isPhoneIncorrect, setIsPhoneIncorrect] = useState(false);
	const [isEmailIncorrect, setIsEmailIncorrect] = useState(false);
	const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);

	const [isFetching, setIsFetching] = useState(false);

	const [emailLogin, setEmailLogin] = useState('');
	const [passwordLogin, setPasswordLogin] = useState('');
	const [name, setName] = useState('');
	const [cpf, setCpf] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const clearForm = () => {
		setEmailLogin('');
		setPasswordLogin('');
		setName('');
		setCpf('');
		setPhone('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	};

	const handleLogin = async (e: FormEvent) => {
		e.preventDefault();

		const loginData = {
			emailCustomer: emailLogin,
			passwordCustomer: passwordLogin,
		};

		try {
			setIsFetching(true);
			const response = await api.post('/api/login/customers', loginData);
			localStorage.setItem('token', JSON.stringify(response.data.token));
			localStorage.setItem('userData', JSON.stringify(response.data.userList));
			router.push('/customer/home');
		} catch (error) {
			setIsFetching(false);
			setIsEmailLoginIncorrect(true);
			setIsPasswordLoginIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Usuário e/ou senha inválido(s)!');
		}
	};

	const handleRegister = async (e: FormEvent) => {
		e.preventDefault();

		const registerData = {
			nameCustomer: name,
			cpfCustomer: cpf.replace(/[^0-9]+/g, ''),
			phoneCustomer: phone.replace(/[^0-9]+/g, ''),
			emailCustomer: email,
			passwordCustomer: password,
			registrationDateCustomer: new Date(),
		};

		let isIncorrect = false;

		if (password.trim().length >= 8 && password.trim() !== confirmPassword.trim()) {
			setIsPasswordIncorrect(true);
			setIsMessageVisible(true);
			setMessage('As senhas não coincidem!');
			isIncorrect = true;
		}
		if (password.trim().length < 8) {
			setIsPasswordIncorrect(true);
			setIsMessageVisible(true);
			setMessage('A senha deve conter pelo menos 8 caracteres!');
			isIncorrect = true;
		}
		if (registerData.phoneCustomer.trim().length < 10) {
			setIsPhoneIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um número de celular válido!');
			isIncorrect = true;
		}
		if (registerData.cpfCustomer.trim().length < 11) {
			setIsCpfIncorrect(true);
			setIsMessageVisible(true);
			setMessage('O CPF deve conter 11 dígitos!');
			isIncorrect = true;
		}
		if (name.length < 5) {
			setIsNameIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um nome válido!');
			isIncorrect = true;
		}
		if (!isIncorrect) {
			try {
				setIsFetching(true);
				await api.post('/api/register/customers', registerData);
				setIsFetching(false);
				setIsLoginPageVisible(true);
				clearForm();
			} catch (error) {
				setIsFetching(false);
				if (error.response.data.error.includes('cpf')) {
					setIsCpfIncorrect(true);
					setIsMessageVisible(true);
					setMessage('Este CPF já está cadastrado!');
				}
				if (error.response.data.error.includes('email')) {
					setIsEmailIncorrect(true);
					setIsMessageVisible(true);
					setMessage('Este email já está cadastrado!');
				}
			}
		}
	};

	useEffect(() => {
		setIsEmailLoginIncorrect(false);
		setIsPasswordLoginIncorrect(false);
		setIsMessageVisible(false);
	}, [emailLogin]);

	useEffect(() => {
		setIsEmailLoginIncorrect(false);
		setIsPasswordLoginIncorrect(false);
		setIsMessageVisible(false);
	}, [passwordLogin]);

	useEffect(() => {
		setIsNameIncorrect(false);
		setIsMessageVisible(false);
	}, [name]);

	useEffect(() => {
		setIsCpfIncorrect(false);
		setIsMessageVisible(false);
	}, [cpf]);

	useEffect(() => {
		setIsPhoneIncorrect(false);
		setIsMessageVisible(false);
	}, [phone]);

	useEffect(() => {
		setIsEmailIncorrect(false);
		setIsMessageVisible(false);
	}, [email]);

	useEffect(() => {
		setIsPasswordIncorrect(false);
		setIsMessageVisible(false);
	}, [password, confirmPassword]);

	return (
		<Container>
			<InstallMessage />
			<Header>
				<LogoImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
			</Header>
			{isLoginPageVisible ? (
				<Section style={{ marginBottom: '4rem' }}>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<div className='title'>
							<TitleBox title='Login' />
							<Button
								className='icon margin'
								width='13rem'
								height='2.5rem'
								onClick={() => {
									setIsLoginPageVisible(!isLoginPageVisible);
									setIsMessageVisible(false);
									clearForm();
								}}
								style={{ textAlign: 'right', paddingRight: '0.2rem' }}
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
								Criar conta
							</Button>
						</div>
						<Form onSubmit={handleLogin}>
							<>
								<InputField
									label='Email'
									placeholder='antonio@email.com'
									type='email'
									required={true}
									value={emailLogin}
									onChange={e => setEmailLogin(e.target.value)}
									isIncorrect={isEmailLoginIncorrect}
								/>
								<InputField
									label='Senha'
									placeholder='**********'
									type='password'
									required={true}
									value={passwordLogin}
									onChange={e => setPasswordLogin(e.target.value)}
									isIncorrect={isPasswordLoginIncorrect}
								/>
								<ButtonsContainer style={{ marginTop: '1rem' }}>
									<Button
										className='icon right'
										width='100%'
										type='submit'
										color={Theme.colors.white}
										backgroundColor={Theme.colors.green}
										isLoading={isFetching}
									>
										{!isFetching && (
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												stroke='#fff'
												viewBox='0 0 24 24'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
												/>
											</svg>
										)}
										{isFetching ? 'Carregando...' : 'Entrar'}
									</Button>
								</ButtonsContainer>
								<Link href='/customer/recover'>
									<PasswordRecover>Esqueci minha senha</PasswordRecover>
								</Link>
								{isMessageVisible && (
									<AnimatePresence>
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
											style={{ marginTop: '1.2rem' }}
										>
											<Message>{message}</Message>
										</motion.div>
									</AnimatePresence>
								)}
							</>
						</Form>
					</motion.div>
				</Section>
			) : (
				<Section style={{ marginBottom: '4rem' }}>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<div className='title'>
								<TitleBox title='Cadastro' />
								<Button
									className='icon margin'
									width='13rem'
									height='2.5rem'
									onClick={() => {
										setIsLoginPageVisible(!isLoginPageVisible);
										setIsMessageVisible(false);
										clearForm();
									}}
								>
									<svg
										fill='currentColor'
										viewBox='0 0 20 20'
										xmlns='http://www.w3.org/2000/svg'
										style={{ marginRight: '0.2rem' }}
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
							<Form onSubmit={handleRegister}>
								<>
									<InputField
										label='Nome Completo'
										placeholder='Antônio da Silva'
										required={true}
										value={name}
										onChange={e => setName(e.target.value)}
										isIncorrect={isNameIncorrect}
									/>
									<InputField
										label='CPF'
										mask='999.999.999-99'
										placeholder='123.456.789-10'
										required={true}
										value={cpf}
										onChange={e => setCpf(e.target.value)}
										isIncorrect={isCpfIncorrect}
									/>
									<InputField
										label='Celular'
										mask={
											phone?.length >= 6 && phone?.[5] === '9'
												? '(99) 99999-9999'
												: '(99) 9999-9999'
										}
										placeholder='(24) 99999-8888'
										value={phone}
										onChange={e => setPhone(e.target.value)}
										isIncorrect={isPhoneIncorrect}
									/>
									<InputField
										label='Email'
										placeholder='antonio@email.com'
										type='email'
										required={true}
										value={email}
										onChange={e => setEmail(e.target.value)}
										isIncorrect={isEmailIncorrect}
									/>
									<InputField
										label='Senha'
										placeholder='**********'
										type='password'
										required={true}
										value={password}
										onChange={e => setPassword(e.target.value)}
										isIncorrect={isPasswordIncorrect}
									/>
									<InputField
										label='Confirmar Senha'
										placeholder='**********'
										type='password'
										required={true}
										value={confirmPassword}
										onChange={e => setConfirmPassword(e.target.value)}
										isIncorrect={isPasswordIncorrect}
									/>
									<ButtonsContainer style={{ marginTop: '1rem' }}>
										<Button
											className='icon right margin'
											width='100%'
											type='submit'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
											isLoading={isFetching}
										>
											{!isFetching && (
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													stroke='#fff'
													viewBox='0 0 24 24'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
													/>
												</svg>
											)}
											{isFetching ? 'Carregando...' : 'Cadastrar'}
										</Button>
									</ButtonsContainer>
									{isMessageVisible && (
										<AnimatePresence>
											<motion.div
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ duration: 0.3 }}
											>
												<Message>{message}</Message>
											</motion.div>
										</AnimatePresence>
									)}
								</>
							</Form>
						</motion.div>
					</AnimatePresence>
				</Section>
			)}
		</Container>
	);
};

export default Login;
