import React, { FormEvent, useEffect, useState } from 'react';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import SelectField from '../../../components/SelectField';

import { Section, BoxCard, Message } from '../../../styles/store/payment';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

const Payment: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: false,
			catalog: false,
			profile: true,
		});
	}, []);

	const [isPaymentButtonIncorrect, setIsPaymentButtonIncorrect] = useState(false);
	const [bankNumber, setBankNumber] = useState('');
	const [agencyNumber, setAgencyNumber] = useState('');
	const [accountNumber, setAccountNumber] = useState('');
	const [verifyingDigit, setVerifyingDigit] = useState('');
	const [isMessageVisible, setIsMessageVisible] = useState(false);

	const handleSavePayment = (e: FormEvent) => {
		e.preventDefault();
		scroll.scrollToBottom();

		setIsMessageVisible(!isMessageVisible);

		setTimeout(() => {
			router.back();
		}, 2000);
	};

	return (
		<Container>
			<Section>
				<TitleBox title='Conta Bancária' />
				<ButtonsContainer>
					<>
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
					</>
				</ButtonsContainer>
				<BoxCard style={{ marginTop: '0' }}>
					<AnimatePresence>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<Form onSubmit={handleSavePayment}>
								<>
									<InputField
										label='Código do banco'
										placeholder='104'
										required={true}
										value={bankNumber}
										onChange={e => setBankNumber(e.target.value)}
										isIncorrect={isPaymentButtonIncorrect}
									/>
									<InputField
										label='Agência'
										placeholder='7337'
										required={true}
										value={agencyNumber}
										onChange={e => setAgencyNumber(e.target.value)}
										isIncorrect={isPaymentButtonIncorrect}
									/>
									<InputField
										label='Conta (sem dígito verificador)'
										placeholder='10000645'
										required={true}
										value={accountNumber}
										onChange={e => setAccountNumber(e.target.value)}
										isIncorrect={isPaymentButtonIncorrect}
									/>
									<InputField
										label='Dígito verificador'
										placeholder='8'
										required={true}
										value={verifyingDigit}
										onChange={e => setVerifyingDigit(e.target.value)}
										isIncorrect={isPaymentButtonIncorrect}
									/>
									<ButtonsContainer
										style={{
											marginTop: '1rem',
											justifyContent: 'flex-end',
										}}
									>
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
												<Message>Conta salva!</Message>
											</motion.div>
										</AnimatePresence>
									)}
								</>
							</Form>
						</motion.div>
					</AnimatePresence>
				</BoxCard>
			</Section>
		</Container>
	);
};

export default Payment;
