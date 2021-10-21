import React, { FormEvent, useEffect, useState } from 'react';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';
import api from '../../../services/api';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import AddressCard from '../../../components/AddressCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import SelectField from '../../../components/SelectField';
import LoadingMessage from '../../../components/LoadingMessage';

import { Section, BoxCard, Message, IncorrectMessage } from '../../../styles/customer/address';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

interface IAddress {
	_id: string;
	idCustomer: string;
	streetNameCustomer: string;
	streetNumberCustomer: string;
	complementCustomer: string;
	neighborhoodCustomer: string;
	stateCustomer: string;
	cityCustomer: string;
	mainAddressCustomer: boolean;
}

const Address: React.FC = () => {
	const { setNavigationState } = useNavigation();

	const [addresses, setAddresses] = useState<IAddress[]>([]);

	const [isMessageVisible, setIsMessageVisible] = useState(false);
	const [message, setMessage] = useState('');
	const [isStreetNameCustomerIncorrect, setIsStreetNameCustomerIncorrect] = useState(false);
	const [isNeighborhoodCustomerIncorrect, setIsNeighborhoodCustomerIncorrect] = useState(false);
	const [isStateCustomerIncorrect, setIsStateCustomerIncorrect] = useState(false);
	const [isCityCustomerIncorrect, setIsCityCustomerIncorrect] = useState(false);

	const [isFetching, setIsFetching] = useState(false);

	const [newAddressVisible, setNewAddressVisible] = useState(false);
	const [listUf, setListUf] = useState([]);
	const [isCityFieldDisabled, setIsCityFieldDisabled] = useState(true);
	const [listCity, setListCity] = useState([]);

	const [streetNameCustomer, setStreetNameCustomer] = useState('');
	const [streetNumberCustomer, setStreetNumberCustomer] = useState('');
	const [complementCustomer, setComplementCustomer] = useState('');
	const [neighborhoodCustomer, setNeighborhoodCustomer] = useState('');
	const [stateCustomer, setStateCustomer] = useState('');
	const [cityCustomer, setCityCustomer] = useState('');

	useEffect(() => {
		setNavigationState({
			home: false,
			search: false,
			orders: false,
			profile: true,
		});
		loadUf();
		getAddresses();
		return () => {
			setAddresses([]);
		};
	}, []);

	useEffect(() => {
		loadCity(stateCustomer);
	}, [stateCustomer]);

	const getAddresses = async () => {
		setIsFetching(true);
		try {
			const { data } = await api.get(
				`/api/address/customers/${JSON.parse(localStorage.getItem('userData'))._id}`,
				{
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				}
			);
			setAddresses(data);
			setIsFetching(false);
		} catch (error) {
			console.log(error);
		}
	};

	const setAsMainAddress = async (index: number) => {
		const allAddresses = [...addresses];
		const addressToEdit = addresses[index];
		const newAddress = { ...addressToEdit, mainAddressCustomer: true };
		const editedAddresses = allAddresses.map(address => ({
			_id: address._id,
			idCustomer: address.idCustomer,
			streetNameCustomer: address.streetNameCustomer,
			streetNumberCustomer: address.streetNumberCustomer,
			complementCustomer: address.complementCustomer,
			neighborhoodCustomer: address.neighborhoodCustomer,
			stateCustomer: address.stateCustomer,
			cityCustomer: address.cityCustomer,
			mainAddressCustomer: false,
		}));
		editedAddresses[index] = newAddress;
		try {
			setAddresses(editedAddresses);
			editedAddresses.forEach(async address => {
				await api.put(`/api/update/address/customers/${address._id}`, address, {
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				});
			});
		} catch (error) {
			console.log(error);
		}
	};

	const handleDeleteAddress = async (index: number) => {
		const allAddresses = [...addresses];
		const addressToDelete = addresses[index];
		allAddresses.splice(index, 1);
		try {
			setAddresses(allAddresses);
			await api.delete(`/api/delete/address/customers/${addressToDelete._id}`, {
				headers: {
					authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
				},
			});
		} catch (error) {
			console.log(error);
		}
	};

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

			if (stateCustomer !== '') {
				setIsCityFieldDisabled(false);
			}
		}
	};

	const handleSaveAddress = async (e: FormEvent) => {
		e.preventDefault();

		const newAddress = {
			streetNameCustomer,
			streetNumberCustomer,
			complementCustomer,
			neighborhoodCustomer,
			cityCustomer,
			stateCustomer,
			mainAddressCustomer: true,
			idCustomer: JSON.parse(localStorage.getItem('userData'))._id,
		};

		let isIncorrect = false;

		if (newAddress.cityCustomer.length < 1) {
			setIsCityCustomerIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Selecione uma cidade!');
			isIncorrect = true;
		}
		if (newAddress.stateCustomer.length < 1) {
			setIsStateCustomerIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Selecione um estado!');
			isIncorrect = true;
		}
		if (newAddress.neighborhoodCustomer.length < 2) {
			setIsNeighborhoodCustomerIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um bairro válido!');
			isIncorrect = true;
		}
		if (newAddress.streetNameCustomer.length < 2) {
			setIsStreetNameCustomerIncorrect(true);
			setIsMessageVisible(true);
			setMessage('Insira um logradouro válido!');
			isIncorrect = true;
		}
		if (!isIncorrect) {
			try {
				setIsFetching(true);
				const allAddresses = [...addresses];
				const editedAddresses = allAddresses.map(address => ({
					_id: address._id,
					idCustomer: address.idCustomer,
					streetNameCustomer: address.streetNameCustomer,
					streetNumberCustomer: address.streetNumberCustomer,
					complementCustomer: address.complementCustomer,
					neighborhoodCustomer: address.neighborhoodCustomer,
					stateCustomer: address.stateCustomer,
					cityCustomer: address.cityCustomer,
					mainAddressCustomer: false,
				}));
				editedAddresses.forEach(async address => {
					await api.put(`/api/update/address/customers/${address._id}`, address, {
						headers: {
							authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
						},
					});
				});
				await api.post('/api/register/address/customers', newAddress, {
					headers: {
						authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
					},
				});
				setIsFetching(false);
				clearForm();
				setNewAddressVisible(!newAddressVisible);
				getAddresses();
			} catch (error) {
				setIsFetching(false);
				setIsMessageVisible(true);
				setMessage('Verifique os campos e tente novamente!');
			}
		}
		scroll.scrollToBottom();
	};

	const clearForm = () => {
		setStreetNameCustomer('');
		setStreetNumberCustomer('');
		setComplementCustomer('');
		setNeighborhoodCustomer('');
		setCityCustomer('');
		setStateCustomer('');
	};

	useEffect(() => {
		setIsStreetNameCustomerIncorrect(false);
		setIsMessageVisible(false);
	}, [streetNameCustomer]);

	useEffect(() => {
		setIsNeighborhoodCustomerIncorrect(false);
		setIsMessageVisible(false);
	}, [neighborhoodCustomer]);

	useEffect(() => {
		setIsStateCustomerIncorrect(false);
		setIsMessageVisible(false);
	}, [stateCustomer]);

	useEffect(() => {
		setIsCityCustomerIncorrect(false);
		setIsMessageVisible(false);
	}, [cityCustomer]);

	return (
		<Container>
			<>
				{!newAddressVisible ? (
					<Section>
						<TitleBox title='Entrega' />
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
									className='icon margin'
									color={Theme.colors.black}
									backgroundColor={Theme.colors.white}
									onClick={() => {
										clearForm();
										setNewAddressVisible(!newAddressVisible);
									}}
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
						<span className='info'>
							Clique em um endereço para defini-lo como principal
						</span>
						{isFetching ? (
							<BoxCard style={{ backgroundColor: '#fff' }}>
								<LoadingMessage />
							</BoxCard>
						) : (
							<BoxCard style={{ marginTop: '0' }}>
								<motion.div
									initial={{ opacity: 0 }}
									exit={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<BoxCard>
										{addresses.length === 0 ? (
											<Message>Nenhum endereço cadastrado!</Message>
										) : (
											addresses.map((address, index) => (
												<AddressCard
													key={address._id}
													isActive={address.mainAddressCustomer}
													street={address.streetNameCustomer}
													houseNumber={address.streetNumberCustomer}
													complement={address.complementCustomer}
													neighborhood={address.neighborhoodCustomer}
													city={address.cityCustomer}
													state={address.stateCustomer}
													onClick={() => {
														if (!address.mainAddressCustomer) {
															setAsMainAddress(index);
														}
													}}
													deleteFunction={() => {
														handleDeleteAddress(index);
													}}
												/>
											))
										)}
									</BoxCard>
								</motion.div>
							</BoxCard>
						)}
					</Section>
				) : (
					<Section>
						<TitleBox title='Entrega' />
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
												value={streetNameCustomer}
												onChange={e =>
													setStreetNameCustomer(e.target.value)
												}
												isIncorrect={isStreetNameCustomerIncorrect}
											/>
											<InputField
												label='Número'
												placeholder='Ex. 42'
												required
												value={streetNumberCustomer}
												onChange={e =>
													setStreetNumberCustomer(e.target.value)
												}
											/>
											<InputField
												label='Complemento'
												placeholder='Ex. Ap. 101'
												value={complementCustomer}
												onChange={e =>
													setComplementCustomer(e.target.value)
												}
											/>
											<InputField
												label='Bairro'
												placeholder='Ex. Vila Santa Cecília'
												required
												value={neighborhoodCustomer}
												onChange={e =>
													setNeighborhoodCustomer(e.target.value)
												}
												isIncorrect={isNeighborhoodCustomerIncorrect}
											/>
											<SelectField
												label='Estado'
												value={stateCustomer}
												onChange={e => setStateCustomer(e.target.value)}
												isIncorrect={isStateCustomerIncorrect}
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
												value={cityCustomer}
												required
												onChange={e => setCityCustomer(e.target.value)}
												isIncorrect={isCityCustomerIncorrect}
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
														isLoading={isFetching}
													>
														{!isFetching && (
															<img
																src='/images/icons/save.svg'
																alt='Salvar'
															/>
														)}
														{isFetching ? 'Carregando...' : 'Salvar'}
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
														<IncorrectMessage>
															{message}
														</IncorrectMessage>
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
			</>
		</Container>
	);
};

export default Address;
