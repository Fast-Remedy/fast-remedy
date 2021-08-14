import React, { FormEvent, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

import TitleBox from '../../../components/TitleBox';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';

import {
	Container,
	Header,
	Section,
	LogoImage,
	PasswordRecover,
} from '../../../styles/customer/login';

import Theme from '../../../styles/theme';

const Login: React.FC = () => {
	const [isLoginPageVisible, setIsLoginPageVisible] = useState(true);

	const handleLogin = async (e: FormEvent) => {
		e.preventDefault();
		try {
			// authentication
			window.location.href = '/customer/home';
		} catch (err) {
			console.log(err);
		}
	};

	const handleRegister = async (e: FormEvent) => {
		e.preventDefault();
		try {
			// authentication
			window.location.href = '/customer/home';
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<Header>
				<LogoImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
			</Header>
			{isLoginPageVisible ? (
				<Section>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<div className='title'>
							<TitleBox title='Login' />
							<Button
								className='icon margin'
								width='12rem'
								height='2.5rem'
								onClick={() => setIsLoginPageVisible(!isLoginPageVisible)}
								style={{ textAlign: 'right' }}
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
								<InputField label='Email' placeholder='antonio@email.com' />
								<InputField
									label='Senha'
									placeholder='xxxxxxxx'
									type='password'
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
										Entrar
									</Button>
								</ButtonsContainer>
								<Link href='/customer/recover'>
									<PasswordRecover>Esqueci minha senha</PasswordRecover>
								</Link>
							</>
						</Form>
					</motion.div>
				</Section>
			) : (
				<Section style={{ marginBottom: '4rem' }} >
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
									width='12rem'
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
										label='Nome Completo'
										placeholder='Antônio da Silva'
									/>
									<InputField label='CPF' placeholder='123.456.789-10' />
									<InputField label='Celular' placeholder='(24) 99999-8888' />
									<InputField label='Email' placeholder='antonio@email.com' />
									<InputField
										label='Senha'
										placeholder='xxxxxxxx'
										type='password'
									/>
									<InputField
										label='Confirmar Senha'
										placeholder='xxxxxxxx'
										type='password'
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
