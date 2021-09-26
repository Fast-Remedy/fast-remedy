import React, { FormEvent, useState, useEffect } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import TitleBox from '../../../components/TitleBox';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import SelectField from '../../../components/SelectField';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import InstallMessage from '../../../components/InstallMessage';

import {
	Container,
	Header,
	Section,
	LogoImage,
	PasswordRecover,
} from '../../../styles/store/login';

import Theme from '../../../styles/theme';

const Login: React.FC = () => {
	const [isLoginPageVisible, setIsLoginPageVisible] = useState(true);
	const [isLoginButtonIncorrect, setIsLoginButtonIncorrect] = useState(false);
	const [isRegisterButtonIncorrect, setIsRegisterButtonIncorrect] = useState(false);
	const [emailLogin, setEmailLogin] = useState('1');
	const [passwordLogin, setPasswordLogin] = useState('2');
	const [companyName, setCompanyName] = useState('3');
	const [tradingName, setTradingName] = useState('3.5');
	const [cnpj, setCnpj] = useState('4');
	const [phone, setPhone] = useState('5');
	const [email, setEmail] = useState('6');
	const [password, setPassword] = useState('7');
	const [confirmPassword, setConfirmPassword] = useState('8');
	const [logo, setLogo] = useState('');
	const [deliveryMode, setDeliveryMode] = useState('Own');
	const [deliveryFee, setDeliveryFee] = useState('');
	const [deliveryEstimatedTime, setDeliveryEstimatedTime] = useState('');
	const [bankNumber, setBankNumber] = useState('');
	const [agencyNumber, setAgencyNumber] = useState('');
	const [accountNumber, setAccountNumber] = useState('');
	const [verifyingDigit, setVerifyingDigit] = useState('');

	useEffect(() => {
		setIsLoginButtonIncorrect(false);
	}, [emailLogin, passwordLogin]);

	useEffect(() => {
		setIsRegisterButtonIncorrect(false);
	}, [companyName, tradingName, cnpj, phone, email, password, confirmPassword]);

	const handleLogin = async (e: FormEvent) => {
		e.preventDefault();

		const loginData = {
			emailStore: emailLogin,
			passwordStore: passwordLogin,
		};

		try {
			// authentication
			router.push('/store/home');
		} catch (err) {
			setIsLoginButtonIncorrect(true);
		}
	};

	const handleRegister = async (e: FormEvent) => {
		e.preventDefault();

		const registerData = {
			companyNameStore: companyName,
			tradingNameStore: tradingName,
			cnpjStore: cnpj,
			phoneStore: phone,
			emailStore: email,
			passwordStore: password,
			deliveryFeeStore: 1,
			deliveryEstimatedTimeStore: 30,
			registrationDateStore: new Date(),
		};

		try {
			// authentication
			router.push('/store/home');
		} catch (err) {
			setIsRegisterButtonIncorrect(true);
		}
	};

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
								onClick={() => setIsLoginPageVisible(!isLoginPageVisible)}
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
									label='Email da Loja'
									placeholder='loja@email.com'
									type='email'
									required={true}
									value={emailLogin}
									onChange={e => setEmailLogin(e.target.value)}
									isIncorrect={isLoginButtonIncorrect}
								/>
								<InputField
									label='Senha'
									placeholder='**********'
									type='password'
									required={true}
									value={passwordLogin}
									onChange={e => setPasswordLogin(e.target.value)}
									isIncorrect={isLoginButtonIncorrect}
								/>
								<ButtonsContainer style={{ marginTop: '1rem' }}>
									<Button
										className='icon right'
										width='100%'
										type='submit'
										color={Theme.colors.white}
										backgroundColor={
											isLoginButtonIncorrect
												? Theme.colors.red
												: Theme.colors.green
										}
									>
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
										{isLoginButtonIncorrect
											? 'Usuário e/ou senha incorreto(s)!'
											: 'Entrar'}
									</Button>
								</ButtonsContainer>
								<Link href='/store/recover'>
									<PasswordRecover>Esqueci minha senha</PasswordRecover>
								</Link>
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
									onClick={() => setIsLoginPageVisible(!isLoginPageVisible)}
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
										label='Razão Social'
										placeholder='LOJA X LTDA - ME'
										required={true}
										value={companyName}
										onChange={e => setCompanyName(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='Nome Fantasia'
										placeholder='Loja X'
										required={true}
										value={tradingName}
										onChange={e => setTradingName(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='CNPJ'
										placeholder='12.345.678/0009-10'
										required={true}
										value={cnpj}
										onChange={e => setCnpj(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='Telefone'
										placeholder='(24) 3333-4444'
										value={phone}
										onChange={e => setPhone(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='Email'
										placeholder='loja@email.com'
										type='email'
										required={true}
										value={email}
										onChange={e => setEmail(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='Senha'
										placeholder='**********'
										type='password'
										required={true}
										value={password}
										onChange={e => setPassword(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='Confirmar Senha'
										placeholder='**********'
										type='password'
										required={true}
										value={confirmPassword}
										onChange={e => setConfirmPassword(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										className='file'
										label='Logo'
										type='file'
										accept='.png, .jpg, .jpeg'
										required={true}
										value={logo}
										onChange={e => setLogo(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<SelectField
										disabled
										label='Modo de entrega'
										value={deliveryMode}
										onChange={e => setDeliveryMode(e.target.value)}
									>
										<option value='Own'>Entregador próprio</option>
										<option value='Platform'>Entregador da plataforma</option>
									</SelectField>
									<InputField
										label='Taxa de entrega'
										placeholder='R$ 5,00'
										required={true}
										value={deliveryFee}
										onChange={e => setDeliveryFee(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='Tempo estimado de entrega (em min)'
										placeholder='40'
										required={true}
										value={deliveryEstimatedTime}
										onChange={e => setDeliveryEstimatedTime(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='Código do banco'
										placeholder='104'
										required={true}
										value={bankNumber}
										onChange={e => setBankNumber(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='Agência'
										placeholder='7337'
										required={true}
										value={agencyNumber}
										onChange={e => setAgencyNumber(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='Conta (sem dígito verificador)'
										placeholder='10000645'
										required={true}
										value={accountNumber}
										onChange={e => setAccountNumber(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<InputField
										label='Dígito verificador'
										placeholder='8'
										required={true}
										value={verifyingDigit}
										onChange={e => setVerifyingDigit(e.target.value)}
										isIncorrect={isRegisterButtonIncorrect}
									/>
									<ButtonsContainer style={{ marginTop: '1rem' }}>
										<Button
											className='icon right'
											width='100%'
											type='submit'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
										>
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
											Cadastrar
										</Button>
									</ButtonsContainer>
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
