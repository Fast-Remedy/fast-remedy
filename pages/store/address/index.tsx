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
import CurrencyField from '../../../components/CurrencyField';
import SelectField from '../../../components/SelectField';
import LoadingMessage from '../../../components/LoadingMessage';
import AddressCard from '../../../components/AddressCard';

import { Section, BoxCard, Message, IncorrectMessage } from '../../../styles/store/address';
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

interface IAddress {
	_id: string;
	idStore: string;
	streetNameStore: string;
	streetNumberStore: string;
	complementStore: string;
	neighborhoodStore: string;
	cityStore: string;
	stateStore: string;
}

const Address: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	const [addresses, setAddresses] = useState<IAddress[]>([]);

	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [message, setMessage] = useState('');
	const [isStreetNameStoreIncorrect, setIsStreetNameStoreIncorrect] = useState(false);
	const [isNeighborhoodStoreIncorrect, setIsNeighborhoodStoreIncorrect] = useState(false);
	const [isStateStoreIncorrect, setIsStateStoreIncorrect] = useState(false);
	const [isCityStoreIncorrect, setIsCityStoreIncorrect] = useState(false);
	const [isDeliveryModeIncorrect, setIsDeliveryModeIncorrect] = useState(false);
	const [isDeliveryFeeIncorrect, setIsDeliveryFeeIncorrect] = useState(false);
	const [isDeliveryEstimatedTimeIncorrect, setIsDeliveryEstimatedTimeIncorrect] = useState(false);

	const [isFetching, setIsFetching] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	const [newAddressVisible, setNewAddressVisible] = useState(false);
	const [listUf, setListUf] = useState([]);
	const [isCityFieldDisabled, setIsCityFieldDisabled] = useState(true);
	const [listCity, setListCity] = useState([]);

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
	const [streetNameStore, setStreetNameStore] = useState('');
	const [streetNumberStore, setStreetNumberStore] = useState('');
	const [complementStore, setComplementStore] = useState('');
	const [neighborhoodStore, setNeighborhoodStore] = useState('');
	const [cityStore, setCityStore] = useState('');
	const [stateStore, setStateStore] = useState('');
	const [deliveryMode, setDeliveryMode] = useState('');
	const [deliveryFee, setDeliveryFee] = useState('');
	const [deliveryEstimatedTime, setDeliveryEstimatedTime] = useState('');

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: false,
			catalog: false,
			profile: true,
		});
		loadUf();
		getData();
		getAddresses();
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
			setDeliveryMode('');
			setDeliveryFee('');
			setDeliveryEstimatedTime('');
			setAddresses([]);
		};
	}, []);

	useEffect(() => {
		loadCity(stateStore);
	}, [stateStore]);

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
			setDeliveryMode(data.deliveryMode);
			setDeliveryFee(data.deliveryFeeStore);
			const hours = Math.floor(data.deliveryEstimatedTimeStore / 60)
				.toString()
				.padStart(2, '0');
			const minutes = data.deliveryEstimatedTimeStore % 60;
			setDeliveryEstimatedTime(`${hours}:${minutes}`);
			localStorage.setItem('storeData', JSON.stringify(data));
		} catch (error) {
			console.log(error);
		}
	};

	const getAddresses = async () => {
		setIsFetching(true);
		try {
			const { data } = await api.get(
				`/api/address/stores/${JSON.parse(localStorage.getItem('storeData'))._id}`,
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('storeToken'))}`,
					},
				}
			);
			setAddresses(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (store._id !== '' && addresses.length > 0) {
			setIsFetching(false);
		}
	}, [store, addresses]);

	const loadUf = () => {
		fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
			.then(response => response.json())
			.then(data => {
				data.sort((a, b) => a.nome.localeCompare(b.nome));
				setListUf([{ sigla: 'Selecione uma opção' }, ...data]);
			});
	};

	const loadCity = async id => {
		if (id.length > 2) {
			setIsCityFieldDisabled(true);
		} else {
			await fetch(
				`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`
			)
				.then(response => response.json())
				.then(data => {
					data.sort((a, b) => a.nome.localeCompare(b.nome));
					setListCity([{ nome: 'Selecione uma opção' }, ...data]);
				});

			if (stateStore !== '') {
				setIsCityFieldDisabled(false);
			}
		}
	};

	const handleUpdate = async (e: FormEvent) => {
		e.preventDefault();

		const timeArray = deliveryEstimatedTime.split(':');
		const minutes = Number(timeArray[0]) * 60 + Number(timeArray[1]);

		const deliveryFeeConverted = deliveryFee.toString().split(' ', 2);

		const updateData = {
			companyNameStore: store.companyNameStore,
			tradingNameStore: store.tradingNameStore,
			emailStore: store.emailStore,
			phoneStore: store.phoneStore,
			imageStore: store.imageStore,
			deliveryMode,
			deliveryFeeStore:
				deliveryFeeConverted.length > 1
					? deliveryFeeConverted[1].replace(/,/g, '.')
					: deliveryFeeConverted[0].replace(/,/g, '.'),
			deliveryEstimatedTimeStore: minutes,
			bankNumber: store.bankNumber,
			agencyNumber: store.agencyNumber,
			accountNumber: store.accountNumber,
			verifyingDigit: store.verifyingDigit,
			registrationDateStore: store.registrationDateStore,
		};

		try {
			setIsUpdating(true);
			await api.put(
				`/api/update/stores/${JSON.parse(localStorage.getItem('storeData'))._id}`,
				updateData,
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('storeToken'))}`,
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
	};

	const handleDeleteAddress = async (index: number) => {
		const addressToDelete = addresses[index];
		try {
			setAddresses([]);
			await api.delete(`/api/delete/address/stores/${addressToDelete._id}`, {
				headers: {
					authorization: `Bearer ${JSON.parse(localStorage.getItem('storeToken'))}`,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleSaveAddress = async (e: FormEvent) => {
		e.preventDefault();

		const newAddress = {
			streetNameStore,
			streetNumberStore,
			complementStore,
			neighborhoodStore,
			cityStore,
			stateStore,
			idStore: JSON.parse(localStorage.getItem('storeData'))._id,
		};

		let isIncorrect = false;

		if (newAddress.cityStore.length < 1) {
			setIsCityStoreIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Selecione uma cidade!');
			isIncorrect = true;
		}
		if (newAddress.stateStore.length < 1) {
			setIsStateStoreIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Selecione um estado!');
			isIncorrect = true;
		}
		if (newAddress.neighborhoodStore.length < 2) {
			setIsNeighborhoodStoreIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um bairro válido!');
			isIncorrect = true;
		}
		if (newAddress.streetNameStore.length < 2) {
			setIsStreetNameStoreIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um logradouro válido!');
			isIncorrect = true;
		}
		if (!isIncorrect) {
			try {
				setIsUpdating(true);
				await api.post('/api/register/address/stores', newAddress, {
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('storeToken'))}`,
					},
				});
				setIsUpdating(false);
				clearForm();
				setNewAddressVisible(!newAddressVisible);
				getAddresses();
			} catch (error) {
				setIsUpdating(false);
				setIsMessageVisible(true);
				setMessage('Verifique os campos e tente novamente!');
			}
		}
		scroll.scrollToBottom();
	};

	const clearForm = () => {
		setStreetNameStore('');
		setStreetNumberStore('');
		setComplementStore('');
		setNeighborhoodStore('');
		setCityStore('');
		setStateStore('');
	};

	useEffect(() => {
		setIsStreetNameStoreIncorrect(false);
		setIsMessageVisible(false);
	}, [streetNameStore]);

	useEffect(() => {
		setIsNeighborhoodStoreIncorrect(false);
		setIsMessageVisible(false);
	}, [neighborhoodStore]);

	useEffect(() => {
		setIsStateStoreIncorrect(false);
		setIsMessageVisible(false);
	}, [stateStore]);

	useEffect(() => {
		setIsCityStoreIncorrect(false);
		setIsMessageVisible(false);
	}, [cityStore]);

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
							<TitleBox title='Endereço e Entrega' />
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
			) : !newAddressVisible ? (
				<Section>
					<TitleBox title='Endereço e Entrega' />
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
							<Button
								className={`icon margin ${addresses.length > 0 && 'disabled'}`}
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
								onClick={() => {
									clearForm();
									setNewAddressVisible(!newAddressVisible);
								}}
								disabled={addresses.length > 0}
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
								Novo
							</Button>
						</>
					</ButtonsContainer>
					<BoxCard style={{ marginTop: '0' }}>
						<motion.div
							initial={{ opacity: 0 }}
							exit={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							<BoxCard style={{ marginTop: '0', marginBottom: '1rem' }}>
								<AnimatePresence>
									<motion.div
										initial={{ opacity: 0 }}
										exit={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.3 }}
									>
										<Form onSubmit={handleUpdate}>
											<>
												<SelectField
													disabled
													label='Modo de entrega'
													value={deliveryMode}
													onChange={e => setDeliveryMode(e.target.value)}
													isIncorrect={isDeliveryModeIncorrect}
												>
													<option value='Own'>Entregador próprio</option>
													<option value='Platform'>
														Entregador da plataforma
													</option>
												</SelectField>
												<CurrencyField
													label='Taxa de entrega'
													placeholder='R$ 5,00'
													required={true}
													value={deliveryFee}
													onChange={e => setDeliveryFee(e.target.value)}
													isIncorrect={isDeliveryFeeIncorrect}
												/>
												<InputField
													label='Tempo estimado de entrega'
													type='time'
													min='00:15'
													max='03:00'
													required={true}
													value={deliveryEstimatedTime}
													onChange={e =>
														setDeliveryEstimatedTime(e.target.value)
													}
													isIncorrect={isDeliveryEstimatedTimeIncorrect}
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
														{!isUpdating && (
															<img
																src='/images/icons/save.svg'
																alt='Salvar'
															/>
														)}
														{isUpdating ? 'Carregando...' : 'Salvar'}
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
															<Message>Endereço salvo!</Message>
														</motion.div>
													)}
												</AnimatePresence>
											</>
										</Form>
									</motion.div>
								</AnimatePresence>
							</BoxCard>
							<BoxCard
								style={{
									marginTop: '2rem',
									marginBottom: '1rem',
									backgroundColor: '#fff',
								}}
							>
								{addresses.length === 0 ? (
									<Message style={{ marginTop: '0', margin: '1rem' }}>
										Nenhum endereço cadastrado!
									</Message>
								) : (
									addresses.map((address, index) => (
										<AddressCard
											key={address._id}
											isActive={false}
											street={address.streetNameStore}
											houseNumber={address.streetNumberStore}
											complement={address.complementStore}
											neighborhood={address.neighborhoodStore}
											city={address.cityStore}
											state={address.stateStore}
											deleteFunction={() => {
												handleDeleteAddress(index);
											}}
										/>
									))
								)}
							</BoxCard>
						</motion.div>
					</BoxCard>
				</Section>
			) : (
				<Section>
					<TitleBox title='Endereço e Entrega' />
					<ButtonsContainer>
						<>
							<Button
								className='icon back'
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
								onClick={() => {
									clearForm();
									setNewAddressVisible(!newAddressVisible);
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
								<Form onSubmit={handleSaveAddress}>
									<>
										<InputField
											label='Logradouro'
											placeholder='Ex. Rua Trinta e Três'
											required
											value={streetNameStore}
											onChange={e => setStreetNameStore(e.target.value)}
											isIncorrect={isStreetNameStoreIncorrect}
										/>
										<InputField
											label='Número'
											placeholder='Ex. 42'
											required
											value={streetNumberStore}
											onChange={e => setStreetNumberStore(e.target.value)}
										/>
										<InputField
											label='Complemento'
											placeholder='Ex. Ap. 101'
											value={complementStore}
											onChange={e => setComplementStore(e.target.value)}
										/>
										<InputField
											label='Bairro'
											placeholder='Ex. Vila Santa Cecília'
											required
											value={neighborhoodStore}
											onChange={e => setNeighborhoodStore(e.target.value)}
											isIncorrect={isNeighborhoodStoreIncorrect}
										/>
										<SelectField
											label='Estado'
											value={stateStore}
											onChange={e => setStateStore(e.target.value)}
											isIncorrect={isStateStoreIncorrect}
										>
											{listUf.map((a, index) => (
												<option key={index} value={a.sigla}>
													{a.sigla}
												</option>
											))}
										</SelectField>
										<SelectField
											disabled={isCityFieldDisabled}
											label='Cidade'
											value={cityStore}
											required
											onChange={e => setCityStore(e.target.value)}
											isIncorrect={isCityStoreIncorrect}
										>
											{listCity.map((a, index) => (
												<option key={index} value={a.nome}>
													{a.nome}
												</option>
											))}
										</SelectField>
										<ButtonsContainer
											style={{
												marginTop: '1rem',
												justifyContent: 'flex-end',
											}}
										>
											<>
												<Button
													width='100%'
													className='icon moreRight margin white'
													type='submit'
													color={Theme.colors.white}
													backgroundColor={Theme.colors.green}
													isLoading={isUpdating}
												>
													{!isUpdating && (
														<img
															src='/images/icons/save.svg'
															alt='Salvar'
														/>
													)}
													{isUpdating ? 'Carregando...' : 'Salvar'}
												</Button>
											</>
										</ButtonsContainer>
										<AnimatePresence>
											{isMessageVisible && (
												<motion.div
													initial={{ opacity: 0 }}
													exit={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ duration: 0.3 }}
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

export default Address;
