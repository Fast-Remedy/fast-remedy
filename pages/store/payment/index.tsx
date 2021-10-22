import React, { FormEvent, useEffect, useState } from 'react';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import api from '../../../services/api';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import LoadingMessage from '../../../components/LoadingMessage';

import { Section, BoxCard, Message, IncorrectMessage } from '../../../styles/store/payment';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

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

const Payment: React.FC = () => {
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
			setBankNumber('');
			setAgencyNumber('');
			setAccountNumber('');
			setVerifyingDigit('');
		};
	}, []);

	const [isFetching, setIsFetching] = useState(true);
	const [isUpdating, setIsUpdating] = useState(false);

	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [isIncorrectMessageVisible, setIsIncorrectMessageVisible] = useState(false);
	const [message, setMessage] = useState('');

	const [isBankNumberIncorrect, setIsBankNumberIncorrect] = useState(false);
	const [isAgencyNumberIncorrect, setIsAgencyNumberIncorrect] = useState(false);
	const [isAccountNumberIncorrect, setIsAccountNumberIncorrect] = useState(false);
	const [isVerifyingDigitIncorrect, setIsVerifyingDigitIncorrect] = useState(false);

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
	const [bankNumber, setBankNumber] = useState('');
	const [agencyNumber, setAgencyNumber] = useState('');
	const [accountNumber, setAccountNumber] = useState('');
	const [verifyingDigit, setVerifyingDigit] = useState('');

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
			setBankNumber(data.bankNumber);
			setAgencyNumber(data.agencyNumber);
			setAccountNumber(data.accountNumber);
			setVerifyingDigit(data.verifyingDigit);
			localStorage.setItem('storeData', JSON.stringify(data));
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	const handleUpdate = async (e: FormEvent) => {
		e.preventDefault();

		const updateData = {
			companyNameStore: store.companyNameStore,
			tradingNameStore: store.tradingNameStore,
			emailStore: store.emailStore,
			phoneStore: store.phoneStore,
			imageStore: store.imageStore,
			deliveryMode: store.deliveryMode,
			deliveryEstimatedTimeStore: store.deliveryEstimatedTimeStore,
			deliveryFeeStore: store.deliveryFeeStore,
			bankNumber: bankNumber,
			agencyNumber: agencyNumber,
			accountNumber: accountNumber,
			verifyingDigit: verifyingDigit,
			registrationDateStore: store.registrationDateStore,
		};

		let isIncorrect = false;

		if (bankNumber.trim().length < 3) {
			setIsBankNumberIncorrect(true);
			setIsIncorrectMessageVisible(true);
			setMessage('O código do banco deve conter 3 dígitos!');
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
				router.back();
				setTimeout(() => {
					setIsMessageVisible(false);
				}, 2000);
			} catch (error) {
				setIsUpdating(false);
				console.log(error);
			}
		}
	};

	useEffect(() => {
		setIsBankNumberIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [bankNumber]);

	useEffect(() => {
		setIsAgencyNumberIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [agencyNumber]);

	useEffect(() => {
		setIsAccountNumberIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [accountNumber]);

	useEffect(() => {
		setIsVerifyingDigitIncorrect(false);
		setIsIncorrectMessageVisible(false);
	}, [verifyingDigit]);

	return (
		<Container>
			{isFetching ? (
				<Section>
					<motion.div
						initial={{ opacity: 0 }}
						exit={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3 }}
						style={{ width: '100%' }}
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
								exit={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<Form onSubmit={handleUpdate}>
									<>
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
											label='Dígito verificador'
											placeholder='8'
											required={true}
											value={verifyingDigit}
											onChange={e => setVerifyingDigit(e.target.value)}
											isIncorrect={isVerifyingDigitIncorrect}
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
													<IncorrectMessage>{message}</IncorrectMessage>
												</motion.div>
											)}
										</AnimatePresence>
									</>
								</Form>
							</motion.div>
						</AnimatePresence>
					</BoxCard>
				</Section>
			)}
		</Container>
	);
};

export default Payment;
