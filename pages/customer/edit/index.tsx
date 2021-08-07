import React, { FormEvent, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

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
	BoxCard,
	Text,
	Title,
	Message,
} from '../../../styles/customer/edit';

import Theme from '../../../styles/theme';

const Edit: React.FC = () => {
	const [personalData, setPersonalData] = useState(false);
	const [contactData, setContactData] = useState(false);
	const [password, setPassword] = useState(false);
	const [isMessageVisible, setIsMessageVisible] = useState(false);

	const goBack = () => {
		window.history.back();
	};

	const handlePersonalData = async (e: FormEvent) => {
		e.preventDefault();
		try {
			// authentication
			setIsMessageVisible(true);
			setTimeout(() => {
				setPersonalData(false);
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

	const handlePassword = async (e: FormEvent) => {
		e.preventDefault();
		try {
			// authentication
			setIsMessageVisible(true);
			setTimeout(() => {
				setPassword(false);
				setIsMessageVisible(false);
			}, 2000);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<Header>
				<LogoImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
			</Header>
			{!personalData && !contactData && !password && (
				<Section>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
					>
						<div className='title'>
							<TitleBox title='Dados' />
							<Button
								width='12rem'
								height='2.5rem'
								onClick={goBack}
								style={{ textAlign: 'right' }}
							>
								Voltar
							</Button>
						</div>
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
						<BoxCard onClick={() => setPassword(!password)}>
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
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<div className='title'>
								<TitleBox title='Dados Pessoais' />
								<Button
									width='12rem'
									height='2.5rem'
									onClick={() => setPersonalData(!personalData)}
									style={{ textAlign: 'right' }}
								>
									Voltar
								</Button>
							</div>
							<Form onSubmit={handlePersonalData}>
								<>
									<InputField
										label='Nome Completo'
										placeholder='Antônio da Silva'
									/>
									<InputField label='CPF' placeholder='123.456.789-10' />
									<ButtonsContainer style={{ marginTop: '1rem' }}>
										<Button
											width='100%'
											type='submit'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
										>
											Atualizar
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
								<Button
									width='12rem'
									height='2.5rem'
									onClick={() => setContactData(!contactData)}
									style={{ textAlign: 'right' }}
								>
									Voltar
								</Button>
							</div>
							<Form onSubmit={handleContactData}>
								<>
									<InputField label='Celular' placeholder='(24) 99999-8888' />
									<InputField label='Email' placeholder='antonio@email.com' />

									<ButtonsContainer style={{ marginTop: '1rem' }}>
										<Button
											width='100%'
											type='submit'
											color={Theme.colors.white}
											backgroundColor={Theme.colors.green}
										>
											Atualizar
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
			{password && (
				<Section>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<div className='title'>
								<TitleBox title='Senha' />
								<Button
									width='12rem'
									height='2.5rem'
									onClick={() => setPassword(!password)}
									style={{ textAlign: 'right' }}
								>
									Voltar
								</Button>
							</div>
							<Form onSubmit={handlePassword}>
								<>
									<InputField
										label='Nova Senha'
										placeholder='xxxxxxxx'
										type='password'
									/>
									<InputField
										label='Confirmar Nova Senha'
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
											Atualizar
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
