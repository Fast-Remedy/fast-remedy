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

import {
	Container,
	Section,
	BoxCard,
	Text,
	Title,
	Message,
	Image,
	ImageContainer,
} from '../../../styles/store/edit';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

const Edit: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: false,
			catalog: false,
			profile: true,
		});
	}, []);

	const [isLogoLoading, setIsLogoLoading] = useState(false);

	const [companyData, setCompanyData] = useState(false);
	const [contactData, setContactData] = useState(false);
	const [passwordData, setPasswordData] = useState(false);
	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [companyName, setCompanyName] = useState('3');
	const [tradingName, setTradingName] = useState('3.5');
	const [cnpj, setCnpj] = useState('4');
	const [phone, setPhone] = useState('5');
	const [email, setEmail] = useState('6');
	const [password, setPassword] = useState('7');
	const [confirmPassword, setConfirmPassword] = useState('8');
	const [logo, setLogo] = useState('');
	const [logoName, setLogoName] = useState('');

	const handleCompanyData = async (e: FormEvent) => {
		e.preventDefault();
		try {
			// authentication
			setIsMessageVisible(true);
			setTimeout(() => {
				setCompanyData(false);
				setIsMessageVisible(false);
			}, 2000);
		} catch (err) {
			console.log(err);
		}
	};

	const handleContactData = async (e: FormEvent) => {
		e.preventDefault();
		try {
			// authentication
			setIsMessageVisible(true);
			setTimeout(() => {
				setContactData(false);
				setIsMessageVisible(false);
			}, 2000);
		} catch (err) {
			console.log(err);
		}
	};

	const handlePasswordData = async (e: FormEvent) => {
		e.preventDefault();
		try {
			// authentication
			setIsMessageVisible(true);
			setTimeout(() => {
				setPasswordData(false);
				setIsMessageVisible(false);
			}, 2000);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			{!companyData && !contactData && !passwordData && (
				<Section>
					<motion.div
						initial={{ opacity: 0 }}
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
									onClick={() => setCompanyData(!companyData)}
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
							<Form onSubmit={handleCompanyData}>
								<>
									<InputField
										label='Razão Social'
										placeholder='LOJA X LTDA - ME'
										required={true}
										value={companyName}
										onChange={e => setCompanyName(e.target.value)}
									/>
									<InputField
										label='Nome Fantasia'
										placeholder='Loja X'
										required={true}
										value={tradingName}
										onChange={e => setTradingName(e.target.value)}
									/>
									<InputField
										label='CNPJ'
										placeholder='12.345.678/0009-10'
										required={true}
										value={cnpj}
										onChange={e => setCnpj(e.target.value)}
									/>
									<ImageContainer>
										<InputField
											className='file'
											label='Logo'
											type='file'
											accept='.png, .jpg, .jpeg'
											required={true}
											value={logoName}
											onChange={async e => {
												setIsLogoLoading(true);
												setLogoName(e.target.value);
												const img64 = await base64(e.target.files);
												setLogo(img64);
											}}
											// isIncorrect={isLogoIncorrect}
										/>
										<Image
											src='/images/logos/drogaria-moderna.png'
											alt='logo'
										/>
									</ImageContainer>
									<ButtonsContainer style={{ marginTop: '1rem' }}>
										<Button
											width='100%'
											className='icon moreRight margin white'
											type='submit'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
										>
											<img src='/images/icons/save.svg' alt='Salvar' />
											Salvar
										</Button>
									</ButtonsContainer>
									{isMessageVisible && (
										<AnimatePresence>
											<motion.div
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ duration: 0.3 }}
											>
												<Message>Cadastro atualizado!</Message>
											</motion.div>
										</AnimatePresence>
									)}
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
									onClick={() => setContactData(!contactData)}
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
							<Form onSubmit={handleContactData}>
								<>
									<InputField
										label='Telefone'
										placeholder='(24) 3333-4444'
										value={phone}
										onChange={e => setPhone(e.target.value)}
									/>
									<InputField
										label='Email'
										placeholder='loja@email.com'
										type='email'
										required={true}
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
									<ButtonsContainer style={{ marginTop: '1rem' }}>
										<Button
											width='100%'
											className='icon moreRight margin white'
											type='submit'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
										>
											<img src='/images/icons/save.svg' alt='Salvar' />
											Salvar
										</Button>
									</ButtonsContainer>
									{isMessageVisible && (
										<AnimatePresence>
											<motion.div
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ duration: 0.3 }}
											>
												<Message>Cadastro atualizado!</Message>
											</motion.div>
										</AnimatePresence>
									)}
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
									onClick={() => setPasswordData(!passwordData)}
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
							<Form onSubmit={handlePasswordData}>
								<>
									<InputField
										label='Nova Senha'
										placeholder='**********'
										type='password'
										required={true}
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
									<InputField
										label='Confirmar Nova Senha'
										placeholder='**********'
										type='password'
										required={true}
										value={confirmPassword}
										onChange={e => setConfirmPassword(e.target.value)}
									/>
									<ButtonsContainer style={{ marginTop: '1rem' }}>
										<Button
											width='100%'
											className='icon moreRight margin white'
											type='submit'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
										>
											<img src='/images/icons/save.svg' alt='Salvar' />
											Salvar
										</Button>
									</ButtonsContainer>
									{isMessageVisible && (
										<AnimatePresence>
											<motion.div
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ duration: 0.3 }}
											>
												<Message>Cadastro atualizado!</Message>
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

export default Edit;
