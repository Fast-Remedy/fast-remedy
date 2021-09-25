import React, { useState, useEffect } from 'react';
// import { GetStaticProps } from 'next';
import router, { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';

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

	// check if data has already been loaded
	const { isFallback } = useRouter();

	const handleSave = () => {
		setIsMessageVisible(true);

		setTimeout(() => {
			router.back();
		}, 2000);
	};

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
					{isFallback ? (
						<BoxCard>
							<LoadingMessage />
						</BoxCard>
					) : (
						<>
							<InputField
								label='Descrição'
								placeholder='Dipirona Sódica 500mg Genérico 10 Comprimidos'
								required={true}
							/>
							<InputField
								className='file'
								label='Imagem'
								type='file'
								accept='.png, .jpg, .jpeg'
								required={true}
							/>
							<InputField label='Preço' placeholder='R$ 5,69' required={true} />
							<SelectField label='Disponibilidade'>
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
								>
									<img
										src='/images/icons/save.svg'
										alt='Salvar'
										style={{ filter: 'invert(1)' }}
									/>
									Cadastrar
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
						</>
					)}
				</Section>
			</>
		</Container>
	);
};

// make page static

// export const getStaticPaths: GetStaticPaths = async () => {
// 	request to api
// 	const response = await api.get('/products')
// 	const data = await response.json();

//     const paths = data.map(product => {
//         return {
//             params: { productId: product.idProduct}
//         }
//     })

// 	return {
// 		// paths,
// 		fallback: false,
// 	};
// };

// export const getStaticProps: GetStaticProps = async context => {
// 	const { productId } = context.params;

// 	// request to api
// 	// const response = await api.get(`/products/${productId}`)
// 	// const data = await response.json();

// 	return {
// 		props: {
// 			product: data,
// 		},
// 		revalidate: 10, // time in seconds
// 	};
// };

export default NewProduct;
