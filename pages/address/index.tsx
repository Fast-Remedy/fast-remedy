import React, { useState } from 'react';
import Container from '../../components/Container';
import TitleBox from '../../components/TitleBox';
import Header from '../../components/Header';
import AddressCard from '../../components/AddressCard';
import ButtonsContainer from '../../components/ButtonsContainer';
import Button from '../../components/Button';
import { Section, BoxCard } from '../../styles/address';
import Theme from '../../styles/theme';

const Address: React.FC = () => {
	const [newAddressVisible, setNewAddressVisible] = useState(false);

	const goBack = () => {
		window.history.back();
	};

	return (
		<Container>
			<>
				<Header />
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
								{!newAddressVisible ? ('Adicionar') : ('Cancelar')}
							</Button>
						</>
					</ButtonsContainer>
					{!newAddressVisible ? (
						<BoxCard>
							<AddressCard className='active'
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
					) : (
						<BoxCard>
                            novo endereço
                        </BoxCard>
					)}
				</Section>
			</>
		</Container>
	);
};

export default Address;
