import React, { FormEvent, useState, useEffect } from 'react';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';
import base64 from '../../../utils/base64';

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
	Image,
	ImageContainer,
} from '../../../styles/store/edit';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';
import api from '../../../services/api';

interface IStore {
	_id: string;
	cnpjStore: string;
	emailStore: string;
	companyNameStore: string;
	tradingNameStore: string;
	phoneStore: string;
	imageStore: string;
	deliveryMode: string;
	deliveryFeeStore: number;
	deliveryEstimatedTimeStore: string;
	bankNumber: string;
	agencyNumber: string;
	accountNumber: string;
	verifyingDigit: string;
	registrationDateStore: string;
}

const Edit: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: false,
			catalog: false,
			profile: true,
		});
		getData();
		return () => {
			setStore({
				_id: '',
				cnpjStore: '',
				emailStore: '',
				companyNameStore: '',
				tradingNameStore: '',
				phoneStore: '',
				imageStore: '',
				deliveryMode: '',
				deliveryFeeStore: 0,
				deliveryEstimatedTimeStore: '',
				bankNumber: '',
				agencyNumber: '',
				accountNumber: '',
				verifyingDigit: '',
				registrationDateStore: '',
			});
			setCompanyNameStore('');
			setTradingNameStore('');
			setCnpjStore('');
			setPhoneStore('');
			setEmailStore('');
			setImageStore('');
			setImageName('');
			setActualPasswordStore('');
			setPasswordStore('');
			setConfirmPasswordStore('');
		};
	}, []);

	const [companyData, setCompanyData] = useState(false);
	const [contactData, setContactData] = useState(false);
	const [passwordData, setPasswordData] = useState(false);

	const [isLogoLoading, setIsLogoLoading] = useState(false);
	const [isFetching, setIsFetching] = useState(true);
	const [isUpdating, setIsUpdating] = useState(false);

	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [isIncorrectMessageVisible, setIsIncorrectMessageVisible] = useState(false);
	const [message, setMessage] = useState('');
	const [isCompanyNameIncorrect, setIsCompanyNameIncorrect] = useState(false);
	const [isTradingNameIncorrect, setIsTradingNameIncorrect] = useState(false);
	const [isCnpjIncorrect, setIsCnpjIncorrect] = useState(false);
	const [isPhoneIncorrect, setIsPhoneIncorrect] = useState(false);
	const [isEmailIncorrect, setIsEmailIncorrect] = useState(false);
	const [isLogoIncorrect, setIsLogoIncorrect] = useState(false);
	const [isActualPasswordIncorrect, setIsActualPasswordIncorrect] = useState(false);
	const [isNewPasswordIncorrect, setIsNewPasswordIncorrect] = useState(false);

	const [store, setStore] = useState<IStore>({
		_id: '',
		cnpjStore: '',
		emailStore: '',
		companyNameStore: '',
		tradingNameStore: '',
		phoneStore: '',
		imageStore: '',
		deliveryMode: '',
		deliveryFeeStore: 0,
		deliveryEstimatedTimeStore: '',
		bankNumber: '',
		agencyNumber: '',
		accountNumber: '',
		verifyingDigit: '',
		registrationDateStore: '',
	});
	const [companyNameStore, setCompanyNameStore] = useState('');
	const [tradingNameStore, setTradingNameStore] = useState('');
	const [cnpjStore, setCnpjStore] = useState('');
	const [phoneStore, setPhoneStore] = useState('');
	const [emailStore, setEmailStore] = useState('');
	const [imageStore, setImageStore] = useState('');
	const [imageName, setImageName] = useState('');
	const [actualPasswordStore, setActualPasswordStore] = useState('');
	const [passwordStore, setPasswordStore] = useState('');
	const [confirmPasswordStore, setConfirmPasswordStore] = useState('');

	const getData = async () => {
		try {
			const { data } = await api.get(
				`/api/stores/${JSON.parse(localStorage.getItem('storeData'))._id}`,
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('storeToken'))}`,
					},
				}
			);
			setStore(data);
			setCompanyNameStore(data.companyNameStore);
			setTradingNameStore(data.tradingNameStore);
			setCnpjStore(data.cnpjStore);
			setPhoneStore(data.phoneStore);
			setEmailStore(data.emailStore);
			setImageStore(data.imageStore);
			localStorage.setItem('storeData', JSON.stringify(data));
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	const resetForm = () => {
		setCompanyNameStore(store.companyNameStore);
		setTradingNameStore(store.tradingNameStore);
		setCnpjStore(store.cnpjStore);
		setPhoneStore(store.phoneStore);
		setEmailStore(store.emailStore);
		setImageStore(store.imageStore);
		setImageName('');
		setActualPasswordStore('');
		setPasswordStore('');
		setConfirmPasswordStore('');
	};

	const changeLogo = async e => {
		setIsLogoLoading(true);
		if (e.target.files[0].size > 5000000) {
			setImageStore('');
			setImageName('');
			setIsLogoIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('A imagem deve conter até 5 MB!');
			setIsLogoLoading(false);
		} else {
			setImageName(e.target.value);
			const img64 = await base64(e.target.files);
			setImageStore(img64);
		}
	};

	const handleUpdate = async (e: FormEvent) => {
		e.preventDefault();

		const updateData = {
			companyNameStore,
			tradingNameStore,
			emailStore,
			phoneStore: phoneStore.replace(/[^0-9]+/g, ''),
			imageStore,
			deliveryMode: store.deliveryMode,
			deliveryEstimatedTimeStore: store.deliveryEstimatedTimeStore,
			deliveryFeeStore: store.deliveryFeeStore,
			bankNumber: store.bankNumber,
			agencyNumber: store.agencyNumber,
			accountNumber: store.accountNumber,
			verifyingDigit: store.verifyingDigit,
			registrationDateStore: store.registrationDateStore,
		};

		let isIncorrect = false;

		if (updateData.phoneStore.trim().length < 10) {
			setIsPhoneIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('Insira um número de celular válido!');
			isIncorrect = true;
		}
		if (updateData.companyNameStore.length < 5) {
			setIsCompanyNameIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('Insira um nome válido!');
			isIncorrect = true;
		}
		if (updateData.tradingNameStore.length < 5) {
			setIsTradingNameIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('Insira um nome válido!');
			isIncorrect = true;
		}
		if (isLogoLoading) {
			setIsLogoIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('Aguarde o carregamento da imagem!');
			isIncorrect = true;
		}
		if (!isIncorrect) {
			try {
				setIsUpdating(true);
				await api.put(
					`/api/update/stores/${JSON.parse(localStorage.getItem('storeData'))._id}`,
					updateData,
					{
						headers: {
							authorization: `Bearer ${JSON.parse(
								localStorage.getItem('storeToken')
							)}`,
						},
					}
				);
				window.location.reload();
				setTimeout(() => {
					setCompanyData(false);
					setContactData(false);
					setIsMessageVisible(false);
				}, 2000);
			} catch (error) {
				setIsUpdating(false);
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
			emailStore: store.emailStore,
			passwordStore: actualPasswordStore,
		};

		let isIncorrect = false;

		if (
			passwordStore.trim().length >= 8 &&
			passwordStore.trim() !== confirmPasswordStore.trim()
		) {
			setIsNewPasswordIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('As senhas não coincidem!');
			isIncorrect = true;
		}
		if (passwordStore.trim().length < 8) {
			setIsNewPasswordIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('A senha deve conter pelo menos 8 caracteres!');
			isIncorrect = true;
		}
		if (!isIncorrect) {
			try {
				setIsUpdating(true);
				const { data } = await api.post('/api/login/stores', loginData);
				localStorage.setItem('storeToken', JSON.stringify(data.token));
				localStorage.setItem('storeData', JSON.stringify(data.storeList));

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
					`/api/update/stores/password/${
						JSON.parse(localStorage.getItem('userData'))._id
					}`,
					{ passwordStore },
					{
						headers: {
							authorization: `Bearer ${JSON.parse(
								localStorage.getItem('storeToken')
							)}`,
						},
					}
				);
				setIsMessageVisible(true);
				localStorage.removeItem('storeToken');
				localStorage.removeItem('storeData');
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
		setIsCompanyNameIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [companyNameStore]);

	useEffect(() => {
		setIsTradingNameIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [tradingNameStore]);

	useEffect(() => {
		setIsCnpjIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [cnpjStore]);

	useEffect(() => {
		setIsPhoneIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [phoneStore]);

	useEffect(() => {
		setIsEmailIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [emailStore]);

	useEffect(() => {
		if (imageStore !== '') {
			setIsLogoIncorrect(false);
			setIsIncorrectMessageVisible(false);
			setIsLogoLoading(false);
		}
	}, [imageStore]);

	useEffect(() => {
		setIsActualPasswordIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [actualPasswordStore]);

	useEffect(() => {
		setIsNewPasswordIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [passwordStore, confirmPasswordStore]);

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
					{!companyData && !contactData && !passwordData && (
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
								<BoxCard onClick={() => setCompanyData(!companyData)}>
									<Text>
										<Title>Dados da Empresa</Title>
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
					{companyData && (
						<Section>
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<div className='title'>
										<TitleBox title='Dados da Empresa' />
									</div>
									<ButtonsContainer>
										<Button
											className='icon back'
											color={Theme.colors.black}
											backgroundColor={Theme.colors.white}
											onClick={() => {
												setCompanyData(!companyData);
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
												label='Razão Social'
												placeholder='LOJA X LTDA - ME'
												required={true}
												value={companyNameStore}
												onChange={e => setCompanyNameStore(e.target.value)}
												isIncorrect={isCompanyNameIncorrect}
											/>
											<InputField
												label='Nome Fantasia'
												placeholder='Loja X'
												required={true}
												value={tradingNameStore}
												onChange={e => setTradingNameStore(e.target.value)}
												isIncorrect={isTradingNameIncorrect}
											/>
											<InputField
												className='disabled'
												label='CNPJ'
												mask='99.999.999/9999-99'
												placeholder='12.345.678/0009-10'
												required={true}
												value={cnpjStore}
												onChange={e => setCnpjStore(e.target.value)}
												isIncorrect={isCnpjIncorrect}
												disabled
												style={{ opacity: 0.6 }}
											/>
											<ImageContainer>
												<InputField
													className='file'
													label='Logo (JPG ou PNG até 5 MB)'
													type='file'
													accept='.png, .jpg, .jpeg'
													value={imageName}
													onChange={e => changeLogo(e)}
													isIncorrect={isLogoIncorrect}
												/>
												<Image src={imageStore} alt={tradingNameStore} />
											</ImageContainer>
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
												label='Telefone'
												mask={
													phoneStore?.length >= 6 &&
													phoneStore?.[5] === '9'
														? '(99) 99999-9999'
														: '(99) 9999-9999'
												}
												placeholder='(24) 3333-4444'
												value={phoneStore}
												onChange={e => setPhoneStore(e.target.value)}
												isIncorrect={isPhoneIncorrect}
											/>
											<InputField
												label='Email'
												placeholder='loja@email.com'
												type='email'
												required={true}
												value={emailStore}
												onChange={e => setEmailStore(e.target.value)}
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
												value={actualPasswordStore}
												onChange={e =>
													setActualPasswordStore(e.target.value)
												}
												isIncorrect={isActualPasswordIncorrect}
											/>
											<InputField
												label='Nova Senha'
												placeholder='**********'
												type='password'
												required={true}
												value={passwordStore}
												onChange={e => setPasswordStore(e.target.value)}
												isIncorrect={isNewPasswordIncorrect}
											/>
											<InputField
												label='Confirmar Nova Senha'
												placeholder='**********'
												type='password'
												required={true}
												value={confirmPasswordStore}
												onChange={e =>
													setConfirmPasswordStore(e.target.value)
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
