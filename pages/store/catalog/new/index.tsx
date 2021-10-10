import React, { useState, useEffect } from 'react';
import router from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import api from '../../../../services/api';
import base64 from '../../../../utils/base64';

import Container from '../../../../components/Container';
import TitleBox from '../../../../components/TitleBox';
import ButtonsContainer from '../../../../components/ButtonsContainer';
import InputField from '../../../../components/InputField';
import SelectField from '../../../../components/SelectField';
import Button from '../../../../components/Button';
import LoadingMessage from '../../../../components/LoadingMessage';

import { Section, BoxCard, Message } from '../../../../styles/store/catalog';
import Theme from '../../../../styles/theme';

import { useNavigation } from '../../../../contexts/NavigationContext';

const NewProduct: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	const [isMessageVisible, setIsMessageVisible] = useState(false);

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: false,
			catalog: true,
			profile: false,
		});
	}, []);

	const [message, setMessage] = useState('');
	const [isImageIncorrect, setIsImageIncorrect] = useState(false);

	const [isImageLoading, setIsImageLoading] = useState(false);
	const [isFetching, setIsFetching] = useState(false);

	const [categoryProduct, setCategoryProduct] = useState('Medicine');
	const [descriptionProduct, setDescriptionProduct] = useState('');
	const [priceProduct, setPriceProduct] = useState('');
	const [availabilityProduct, setAvailabilityProduct] = useState('available');
	const [idStore, setIdStore] = useState(JSON.parse(localStorage.getItem('storeData'))._id);
	const [imageProduct, setImageProduct] = useState('');
	const [imageName, setImageName] = useState('');

	const changeImage = async e => {
		setIsImageLoading(true);
		if (e.target.files[0].size > 5000000) {
			setImageProduct('');
			setImageName('');
			setIsImageIncorrect(true);
			setIsMessageVisible(true);
			setMessage('A imagem deve conter até 5 MB!');
			setIsImageLoading(false);
		} else {
			setImageName(e.target.value);
			const img64 = await base64(e.target.files);
			setImageProduct(img64);
		}
	};

	const handleSave = async () => {
		setIsMessageVisible(true);

		const priceConverted = priceProduct.split(' ', 2);

		const availability = availabilityProduct === 'available' ? true : false;

		const newProduct = {
			idStore,
			categoryProduct,
			descriptionProduct,
			priceProduct: priceConverted[1].replace(/,/g, '.'),
			availabilityProduct: availability,
			imageProduct,
			registrationDateProduct: new Date(),
		};

		try {
			setIsFetching(true);
			const { data } = await api.post('/api/register/product/stores', newProduct, {
				headers: {
					authorization: `Bearer ${JSON.parse(localStorage.getItem('storeToken'))}`,
				},
			});

			console.log(data);
			setTimeout(() => {
				router.back();
			}, 2000);
		} catch (error) {
			console.log(error);
			setIsFetching(false);
		}
	};

	useEffect(() => {
		if (imageProduct !== '') {
			setIsImageIncorrect(false);
			setIsMessageVisible(false);
			setIsImageLoading(false);
		}
	}, [imageProduct]);

	return (
		<Container>
			<>
				<Section>
					<TitleBox title='Novo Produto' />
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
					<InputField
						label='Descrição'
						placeholder='Dipirona Sódica 500mg Genérico 10 Comprimidos'
						required={true}
						value={descriptionProduct}
						onChange={e => setDescriptionProduct(e.target.value)}
					/>
					<InputField
						className='file'
						label='Imagem (JPG ou PNG até 5 MB)'
						type='file'
						accept='.png, .jpg, .jpeg'
						required={true}
						value={imageName}
						disabled={isImageLoading}
						onChange={e => changeImage(e)}
						isIncorrect={isImageIncorrect}
					/>
					<InputField
						label='Preço'
						placeholder='R$ 5,69'
						required={true}
						value={priceProduct}
						onChange={e => setPriceProduct(e.target.value)}
					/>
					<SelectField
						label='Disponibilidade'
						value={availabilityProduct}
						onChange={e => setAvailabilityProduct(e.target.value)}
					>
						<option value='available'>Disponível</option>
						<option value='soldOff'>Esgotado</option>
					</SelectField>
					<ButtonsContainer style={{ marginTop: '1rem' }}>
						<Button
							className='icon right'
							width='100%'
							color={Theme.colors.white}
							backgroundColor={Theme.colors.green}
							onClick={handleSave}
							isLoading={isFetching}
						>
							{!isFetching && (
								<img
									src='/images/icons/save.svg'
									alt='Salvar'
									style={{ filter: 'invert(1)' }}
								/>
							)}
							{isFetching ? 'Carregando...' : 'Cadastrar'}
						</Button>
					</ButtonsContainer>
					{isMessageVisible && (
						<AnimatePresence>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<Message>Produto cadastrado!</Message>
							</motion.div>
						</AnimatePresence>
					)}
				</Section>
			</>
		</Container>
	);
};

export default NewProduct;
