import React, { FormEvent, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronRight } from 'react-icons/fi';

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
} from '../../../styles/customer/edit';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

const Edit: React.FC = () => {
    const { setNavigationState } = useNavigation();

	useEffect(
		() =>
			setNavigationState({
				home: false,
				search: false,
				orders: false,
				profile: true,
			}),
		[]
	);

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
			{!personalData && !contactData && !password && (
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
								onClick={goBack}
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
							</div>
							<ButtonsContainer>
								<Button
									className='icon back'
									color={Theme.colors.black}
									backgroundColor={Theme.colors.white}
									onClick={() => setPersonalData(!personalData)}
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
							<Form onSubmit={handlePersonalData}>
								<>
									<InputField
										label='Nome Completo'
										placeholder='Antônio da Silva'
									/>
									<InputField label='CPF' placeholder='123.456.789-10' />
									<ButtonsContainer style={{ marginTop: '2rem' }}>
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
									<InputField label='Celular' placeholder='(24) 99999-8888' />
									<InputField label='Email' placeholder='antonio@email.com' />

									<ButtonsContainer style={{ marginTop: '2rem' }}>
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
							</div>
							<ButtonsContainer>
								<Button
									className='icon back'
									color={Theme.colors.black}
									backgroundColor={Theme.colors.white}
									onClick={() => setPassword(!password)}
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
									<ButtonsContainer style={{ marginTop: '2rem' }}>
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
