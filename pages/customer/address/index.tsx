import React, { FormEvent, useEffect, useState } from 'react';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import AddressCard from '../../../components/AddressCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import SelectField from '../../../components/SelectField';

import { Section, BoxCard } from '../../../styles/customer/address';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

const Address: React.FC = () => {
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

	const [newAddressVisible, setNewAddressVisible] = useState(false);
	const [listUf, setListUf] = useState([]);
	const [isCityFieldDisabled, setIsCityFieldDisabled] = useState(true);
	const [listCity, setListCity] = useState([]);
	const [state, setState] = useState('');
	const [city, setCity] = useState('');

	const loadUf = () => {
		fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
			.then(response => response.json())
			.then(data => {
				data.sort((a, b) => a.nome.localeCompare(b.nome));
				setListUf([{ sigla: 'Selecione uma opção' }, ...data]);
			});
	};

	useEffect(() => {
		loadUf();
	}, []);

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

			if (state !== '') {
				setIsCityFieldDisabled(false);
			}
		}
	};

	useEffect(() => {
		loadCity(state);
	}, [state]);

	const handleSaveAddress = (e: FormEvent) => {
		setNewAddressVisible(!newAddressVisible);
	};

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
									onClick={() => setNewAddressVisible(!newAddressVisible)}
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
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<BoxCard>
									<AddressCard
										isActive={true}
										postalCode='27250-620'
										street='Rua Trinta e Três'
										houseNumber='46'
										complement='Ap. 101'
										neighborhood='Vila Santa Cecília'
										city='Volta Redonda'
										state='RJ'
									/>
									<AddressCard
										postalCode='27250-620'
										street='Rua Soldado Francisco Alves Rocha'
										houseNumber='46'
										neighborhood='Santo Agostinho'
										city='Volta Redonda'
										state='RJ'
									/>
								</BoxCard>
							</motion.div>
						</BoxCard>
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
									onClick={() => setNewAddressVisible(!newAddressVisible)}
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
									<Form onSubmit={handleSaveAddress}>
										<>
											<InputField
												label='Logradouro'
												placeholder='Ex. Rua Trinta e Três'
											/>
											<InputField label='Número' placeholder='Ex. 42' />
											<InputField
												label='Complemento'
												placeholder='Ex. Ap. 101'
											/>
											<InputField
												label='Bairro'
												placeholder='Ex. Vila Santa Cecília'
											/>
											<SelectField
												label='Estado'
												value={state}
												onChange={e => setState(e.target.value)}
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
												value={city}
												onChange={e => setCity(e.target.value)}
											>
												{listCity.map((a, index) => (
													<option key={index} value={a.nome}>
														{a.nome}
													</option>
												))}
											</SelectField>
											<ButtonsContainer
												style={{
													marginTop: '2rem',
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
													>
														<img
															src='/images/icons/save.svg'
															alt='Salvar'
														/>
														Salvar
													</Button>
												</>
											</ButtonsContainer>
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
