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
								width='12rem'
								height='2.5rem'
								onClick={() => setIsLoginPageVisible(!isLoginPageVisible)}
								style={{ textAlign: 'right' }}
							>
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
										width='100%'
										type='submit'
										color={Theme.colors.white}
										backgroundColor={Theme.colors.green}
									>
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
				<Section>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<div className='title'>
								<TitleBox title='Cadastro' />
								<Button
									width='12rem'
									height='2.5rem'
									onClick={() => setIsLoginPageVisible(!isLoginPageVisible)}
									style={{ textAlign: 'right' }}
								>
									Voltar
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
											width='100%'
											type='submit'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
										>
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
