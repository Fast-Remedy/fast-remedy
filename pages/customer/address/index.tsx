import React, { FormEvent, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CustomerHeader from '../../../components/CustomerHeader';
import AddressCard from '../../../components/AddressCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';
import Form from '../../../components/Form';
import InputField from '../../../components/InputField';
import SelectField from '../../../components/SelectField';

import { Section, BoxCard } from '../../../styles/address';
import Theme from '../../../styles/theme';

const Address: React.FC = () => {
	const [newAddressVisible, setNewAddressVisible] = useState(false);
	const [listUf, setListUf] = useState([]);
	const [isCityFieldDisabled, setIsCityFieldDisabled] = useState(true);
	const [listCity, setListCity] = useState([]);
	const [state, setState] = useState('');
	const [city, setCity] = useState('');

	const goBack = () => {
		window.history.back();
	};

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
				<CustomerHeader />
				<Section>
					<TitleBox title='Entrega' />
					<ButtonsContainer>
						<>
							<Button
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
								onClick={goBack}
							>
								Voltar
							</Button>
							<Button
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
								onClick={() => setNewAddressVisible(!newAddressVisible)}
							>
								{!newAddressVisible ? 'Adicionar' : 'Cancelar'}
							</Button>
						</>
					</ButtonsContainer>
					{!newAddressVisible ? (
						<BoxCard>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<BoxCard>
									<AddressCard
										className='active'
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
					) : (
						<BoxCard>
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ duration: 0.3 }}
								>
									<BoxCard>
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
														marginTop: '1rem',
														justifyContent: 'flex-end',
													}}
												>
													<>
														<Button
															type='submit'
															color={Theme.colors.white}
															backgroundColor={Theme.colors.green}
														>
															Salvar
														</Button>
													</>
												</ButtonsContainer>
											</>
										</Form>
									</BoxCard>
								</motion.div>
							</AnimatePresence>
						</BoxCard>
					)}
				</Section>
			</>
		</Container>
	);
};

export default Address;
