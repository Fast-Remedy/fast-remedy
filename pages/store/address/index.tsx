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

import { Section, BoxCard, Message } from '../../../styles/store/address';
import Theme from '../../../styles/theme';

import { useNavigation } from '../../../contexts/NavigationContext';

const Address: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: false,
			catalog: false,
			profile: true,
		});
	}, []);

	const [listUf, setListUf] = useState([]);
	const [isCityFieldDisabled, setIsCityFieldDisabled] = useState(true);
	const [listCity, setListCity] = useState([]);
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [deliveryMode, setDeliveryMode] = useState('');
	const [deliveryFee, setDeliveryFee] = useState('');
	const [deliveryEstimatedTime, setDeliveryEstimatedTime] = useState('');
	const [isMessageVisible, setIsMessageVisible] = useState(false);

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
									<InputField label='Complemento' placeholder='Ex. Ap. 101' />
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
									<SelectField
										disabled
										label='Modo de entrega'
										value={deliveryMode}
										onChange={e => setDeliveryMode(e.target.value)}
									>
										<option value='Own'>Entregador próprio</option>
										<option value='Platform'>Entregador da plataforma</option>
									</SelectField>
									<InputField
										label='Taxa de entrega'
										placeholder='R$ 5,00'
										required={true}
										value={deliveryFee}
										onChange={e => setDeliveryFee(e.target.value)}
									/>
									<InputField
										label='Tempo estimado de entrega (em min)'
										placeholder='40'
										required={true}
										value={deliveryEstimatedTime}
										onChange={e => setDeliveryEstimatedTime(e.target.value)}
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
												<Message>Endereço salvo!</Message>
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

export default Address;
