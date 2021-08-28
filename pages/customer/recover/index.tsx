import React, { FormEvent, useState } from 'react';
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
	Message,
} from '../../../styles/customer/recover';

import Theme from '../../../styles/theme';

const Recover: React.FC = () => {
	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [email, setEmail] = useState('1');

	const goBack = () => {
		window.history.back();
	};

	const handleRecover = (e: FormEvent) => {
		e.preventDefault();

		setIsMessageVisible(!isMessageVisible);

		setTimeout(() => {
			window.location.href = '/customer/login';
		}, 2000);
	};

	return (
		<Container>
			<Header>
				<LogoImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
			</Header>
			<Section>
				<div className='title'>
					<TitleBox title='Recuperar Senha' />
					<Button
						className='icon'
						width='12rem'
						height='2.5rem'
						onClick={goBack}
						style={{ textAlign: 'right', marginLeft: '1rem' }}
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
				<Form onSubmit={handleRecover}>
					<>
						<InputField
							label='Email'
							placeholder='antonio@email.com'
							type='email'
							required={true}
							value={email}
							onChange={e => setEmail(e.target.value)}
							isIncorrect={true}
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
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
									<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
								</svg>
								Enviar email de recuperação
							</Button>
						</ButtonsContainer>
						{isMessageVisible && (
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<Message>Email enviado!</Message>
								</motion.div>
							</AnimatePresence>
						)}
					</>
				</Form>
			</Section>
		</Container>
	);
};

export default Recover;
