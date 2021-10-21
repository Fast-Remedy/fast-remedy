import React, { FormEvent, useState, useEffect } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { validateCnpj } from '../../../utils/validate';
import api from '../../../services/api';
import base64 from '../../../utils/base64';

import TitleBox from '../../../components/TitleBox';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import CurrencyField from '../../../components/CurrencyField';
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
	Message,
} from '../../../styles/store/login';

import Theme from '../../../styles/theme';

const Login: React.FC = () => {
	useEffect(() => {
		localStorage.removeItem('token');
		localStorage.removeItem('userData');
		localStorage.removeItem('storeToken');
		localStorage.removeItem('storeData');
	}, []);

	const [isLoginPageVisible, setIsLoginPageVisible] = useState(true);

	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [message, setMessage] = useState('');
	const [isEmailLoginIncorrect, setIsEmailLoginIncorrect] = useState(false);
	const [isPasswordLoginIncorrect, setIsPasswordLoginIncorrect] = useState(false);
	const [isCompanyNameIncorrect, setIsCompanyNameIncorrect] = useState(false);
	const [isTradingNameIncorrect, setIsTradingNameIncorrect] = useState(false);
	const [isCnpjIncorrect, setIsCnpjIncorrect] = useState(false);
	const [isPhoneIncorrect, setIsPhoneIncorrect] = useState(false);
	const [isEmailIncorrect, setIsEmailIncorrect] = useState(false);
	const [isPasswordIncorrect, setIsPasswordIncorrect] = useState(false);
	const [isLogoIncorrect, setIsLogoIncorrect] = useState(false);
	const [isDeliveryModeIncorrect, setIsDeliveryModeIncorrect] = useState(false);
	const [isDeliveryFeeIncorrect, setIsDeliveryFeeIncorrect] = useState(false);
	const [isDeliveryEstimatedTimeIncorrect, setIsDeliveryEstimatedTimeIncorrect] = useState(false);
	const [isBankNumberIncorrect, setIsBankNumberIncorrect] = useState(false);
	const [isAgencyNumberIncorrect, setIsAgencyNumberIncorrect] = useState(false);
	const [isAccountNumberIncorrect, setIsAccountNumberIncorrect] = useState(false);
	const [isVerifyingDigitIncorrect, setIsVerifyingDigitIncorrect] = useState(false);

	const [isLogoLoading, setIsLogoLoading] = useState(false);
	const [isFetching, setIsFetching] = useState(false);

	const [emailLogin, setEmailLogin] = useState('');
	const [passwordLogin, setPasswordLogin] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [tradingName, setTradingName] = useState('');
	const [cnpj, setCnpj] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [logo, setLogo] = useState<any>('');
	const [logoName, setLogoName] = useState('');
	const [deliveryMode, setDeliveryMode] = useState('Own');
	const [deliveryFee, setDeliveryFee] = useState('');
	const [deliveryEstimatedTime, setDeliveryEstimatedTime] = useState('');
	const [bankNumber, setBankNumber] = useState('');
	const [agencyNumber, setAgencyNumber] = useState('');
	const [accountNumber, setAccountNumber] = useState('');
	const [verifyingDigit, setVerifyingDigit] = useState('');

	const clearForm = () => {
		setEmailLogin('');
		setPasswordLogin('');
		setCompanyName('');
		setTradingName('');
		setCnpj('');
		setPhone('');
		setEmail('');
		setPassword('');
		setConfirmPassword('');
		setLogo('');
		setLogoName('');
		setDeliveryMode('Own');
		setDeliveryFee('');
		setDeliveryEstimatedTime('');
		setBankNumber('');
		setAgencyNumber('');
		setAccountNumber('');
		setVerifyingDigit('');
	};

	const changeLogo = async e => {
		setIsLogoLoading(true);
		if (e.target.files[0].size > 5000000) {
			setLogo('');
			setLogoName('');
			setIsLogoIncorrect(true);
			setIsMessageVisible(true);
			setMessage('A imagem deve conter até 5 MB!');
			setIsLogoLoading(false);
		} else {
			setLogoName(e.target.value);
			const img64 = await base64(e.target.files);
			setLogo(img64);
		}
	};

	const handleLogin = async (e: FormEvent) => {
		e.preventDefault();

		const loginData = {
			emailStore: emailLogin,
			passwordStore: passwordLogin,
		};

		try {
			setIsFetching(true);
			const { data } = await api.post('/api/login/stores', loginData);
			localStorage.setItem('storeToken', JSON.stringify(data.token));
			localStorage.setItem('storeData', JSON.stringify(data.storeList));
			router.push('/store/home');
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

		const timeArray = deliveryEstimatedTime.split(':');
		const minutes = Number(timeArray[0]) * 60 + Number(timeArray[1]);

		const deliveryFeeConverted = deliveryFee.split(' ', 2);

		const registerData = {
			companyNameStore: companyName,
			tradingNameStore: tradingName,
			cnpjStore: cnpj.replace(/[^0-9]+/g, ''),
			phoneStore: phone.replace(/[^0-9]+/g, ''),
			emailStore: email,
			passwordStore: password,
			imageStore: logo,
			deliveryMode,
			deliveryFeeStore: deliveryFeeConverted[1].replace(/,/g, '.'),
			deliveryEstimatedTimeStore: minutes,
			bankNumber: bankNumber,
			agencyNumber: agencyNumber,
			accountNumber: accountNumber,
			verifyingDigit: verifyingDigit,
			registrationDateStore: new Date(),
		};

		let isIncorrect = false;

		if (bankNumber.trim().length < 3) {
			setIsBankNumberIncorrect(true);
			setIsMessageVisible(true);
			setMessage('O código do banco deve conter 3 dígitos!');
			isIncorrect = true;
		}
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
		if (registerData.phoneStore.trim().length < 10) {
			setIsPhoneIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um número de celular válido!');
			isIncorrect = true;
		}
		if (!validateCnpj(registerData.cnpjStore)) {
			setIsCnpjIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um CNPJ válido!');
			isIncorrect = true;
		}
		if (registerData.cnpjStore.trim().length < 14) {
			setIsCnpjIncorrect(true);
			setIsMessageVisible(true);
			setMessage('O CNPJ deve conter 14 dígitos!');
			isIncorrect = true;
		}
		if (registerData.companyNameStore.length < 5) {
			setIsCompanyNameIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um nome válido!');
			isIncorrect = true;
		}
		if (registerData.tradingNameStore.length < 5) {
			setIsTradingNameIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um nome válido!');
			isIncorrect = true;
		}
		if (isLogoLoading) {
			setIsLogoIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Aguarde o carregamento da imagem!');
			isIncorrect = true;
		}
		if (!isIncorrect) {
			try {
				setIsFetching(true);
				await api.post('/api/register/stores', registerData);
				setIsFetching(false);
				setIsLoginPageVisible(true);
				clearForm();
			} catch (error) {
				setIsFetching(false);
				if (error.response.data.error.includes('cnpj')) {
					setIsCnpjIncorrect(true);
					setIsMessageVisible(true);
					setMessage('Este CNPJ já está cadastrado!');
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
		setIsTradingNameIncorrect(false);
		setIsMessageVisible(false);
	}, [tradingName]);

	useEffect(() => {
		setIsCompanyNameIncorrect(false);
		setIsMessageVisible(false);
	}, [companyName]);

	useEffect(() => {
		setIsCnpjIncorrect(false);
		setIsMessageVisible(false);
	}, [cnpj]);

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

	useEffect(() => {
		if (logo !== '') {
			setIsLogoIncorrect(false);
			setIsMessageVisible(false);
			setIsLogoLoading(false);
		}
	}, [logo]);

	useEffect(() => {
		setIsDeliveryModeIncorrect(false);
		setIsMessageVisible(false);
	}, [deliveryMode]);

	useEffect(() => {
		setIsDeliveryFeeIncorrect(false);
		setIsMessageVisible(false);
	}, [deliveryFee]);

	useEffect(() => {
		setIsDeliveryEstimatedTimeIncorrect(false);
		setIsMessageVisible(false);
	}, [deliveryEstimatedTime]);

	useEffect(() => {
		setIsBankNumberIncorrect(false);
		setIsMessageVisible(false);
	}, [bankNumber]);

	useEffect(() => {
		setIsAgencyNumberIncorrect(false);
		setIsMessageVisible(false);
	}, [agencyNumber]);

	useEffect(() => {
		setIsAccountNumberIncorrect(false);
		setIsMessageVisible(false);
	}, [accountNumber]);

	useEffect(() => {
		setIsVerifyingDigitIncorrect(false);
		setIsMessageVisible(false);
	}, [verifyingDigit]);

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
						exit={{ opacity: 0 }}
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
									label='Email da Loja'
									placeholder='loja@email.com'
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
								<Link href='/store/recover'>
									<PasswordRecover>Esqueci minha senha</PasswordRecover>
								</Link>
								<AnimatePresence>
									{isMessageVisible && (
										<motion.div
											initial={{ opacity: 0 }}
											exit={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.3 }}
											style={{ marginTop: '1.2rem' }}
										>
											<Message>{message}</Message>
										</motion.div>
									)}
								</AnimatePresence>
							</>
						</Form>
					</motion.div>
				</Section>
			) : (
				<Section style={{ marginBottom: '4rem' }}>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
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
										label='Razão Social'
										placeholder='LOJA X LTDA - ME'
										required={true}
										value={companyName}
										onChange={e => setCompanyName(e.target.value)}
										isIncorrect={isCompanyNameIncorrect}
									/>
									<InputField
										label='Nome Fantasia'
										placeholder='Loja X'
										required={true}
										value={tradingName}
										onChange={e => setTradingName(e.target.value)}
										isIncorrect={isTradingNameIncorrect}
									/>
									<InputField
										label='CNPJ'
										mask='99.999.999/9999-99'
										placeholder='12.345.678/0009-10'
										required={true}
										value={cnpj}
										onChange={e => setCnpj(e.target.value)}
										isIncorrect={isCnpjIncorrect}
									/>
									<InputField
										label='Telefone'
										mask={
											phone?.length >= 6 && phone?.[5] === '9'
												? '(99) 99999-9999'
												: '(99) 9999-9999'
										}
										placeholder='(24) 3333-4444'
										value={phone}
										onChange={e => setPhone(e.target.value)}
										isIncorrect={isPhoneIncorrect}
									/>
									<InputField
										label='Email'
										placeholder='loja@email.com'
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
									<InputField
										className='file'
										label='Logo (JPG ou PNG até 5 MB)'
										type='file'
										accept='.png, .jpg, .jpeg'
										required={true}
										value={logoName}
										disabled={isLogoLoading}
										onChange={e => changeLogo(e)}
										isIncorrect={isLogoIncorrect}
									/>
									<SelectField
										disabled
										label='Modo de entrega'
										value={deliveryMode}
										onChange={e => setDeliveryMode(e.target.value)}
										isIncorrect={isDeliveryModeIncorrect}
									>
										<option value='Own'>Entregador próprio</option>
										<option value='Platform'>Entregador da plataforma</option>
									</SelectField>
									<CurrencyField
										label='Taxa de entrega'
										placeholder='R$ 5,00'
										required={true}
										value={deliveryFee}
										onChange={e => setDeliveryFee(e.target.value)}
										isIncorrect={isDeliveryFeeIncorrect}
									/>
									<InputField
										label='Tempo estimado de entrega'
										type='time'
										min='00:15'
										max='03:00'
										required={true}
										value={deliveryEstimatedTime}
										onChange={e => setDeliveryEstimatedTime(e.target.value)}
										isIncorrect={isDeliveryEstimatedTimeIncorrect}
									/>
									<InputField
										label='Código do banco'
										mask='999'
										placeholder='104'
										required={true}
										value={bankNumber}
										onChange={e => setBankNumber(e.target.value)}
										isIncorrect={isBankNumberIncorrect}
									/>
									<InputField
										label='Agência'
										placeholder='7337'
										required={true}
										value={agencyNumber}
										onChange={e => setAgencyNumber(e.target.value)}
										isIncorrect={isAgencyNumberIncorrect}
									/>
									<InputField
										label='Conta (sem dígito verificador)'
										placeholder='10000645'
										required={true}
										value={accountNumber}
										onChange={e => setAccountNumber(e.target.value)}
										isIncorrect={isAccountNumberIncorrect}
									/>
									<InputField
										label='Dígito verificador (caso não possua, digite 0)'
										placeholder='8'
										required={true}
										value={verifyingDigit}
										onChange={e => setVerifyingDigit(e.target.value)}
										isIncorrect={isVerifyingDigitIncorrect}
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
									<AnimatePresence>
										{isMessageVisible && (
											<motion.div
												initial={{ opacity: 0 }}
												exit={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ duration: 0.3 }}
											>
												<Message>{message}</Message>
											</motion.div>
										)}
									</AnimatePresence>
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
