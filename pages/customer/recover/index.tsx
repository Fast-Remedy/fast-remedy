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
						width='12rem'
						height='2.5rem'
						onClick={goBack}
						style={{ textAlign: 'right', marginLeft: '1rem' }}
					>
						Voltar
					</Button>
				</div>
				<Form onSubmit={handleRecover}>
					<>
						<InputField label='Email' placeholder='antonio@email.com' />
						<ButtonsContainer style={{ marginTop: '1rem' }}>
							<Button
								width='100%'
								type='submit'
								color={Theme.colors.white}
								backgroundColor={Theme.colors.green}
							>
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
