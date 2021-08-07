import React from 'react';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CustomerHeader from '../../../components/CustomerHeader';
import CartIcon from '../../../components/CartIcon';
import ProfileCard from '../../../components/ProfileCard';
import ButtonsContainer from '../../../components/ButtonsContainer';
import Button from '../../../components/Button';

import { Section, BoxCard } from '../../../styles/customer/profile';
import Theme from '../../../styles/theme';

const Profile: React.FC = () => {
	const goBack = () => {
		window.history.back();
	};

	const handleBuy = () => {
		window.location.href = '/customer/success';
	};

	return (
		<Container>
			<>
				<CustomerHeader />
				<Section>
					<div className='title'>
						<TitleBox title='Perfil' />
						<CartIcon />
					</div>
					<ButtonsContainer>
						<>
							<Button
								color={Theme.colors.black}
								backgroundColor={Theme.colors.white}
								onClick={goBack}
							>
								Voltar
							</Button>
						</>
					</ButtonsContainer>
					<BoxCard>
						<ProfileCard href='customer/address' menu='Endereços' />
					</BoxCard>
					<BoxCard>
						<ProfileCard href='customer/payment' menu='Formas de Pagamento' />
					</BoxCard>
					<BoxCard>
						<ProfileCard href='customer/edit' menu='Meus Dados' />
					</BoxCard>
					<BoxCard>
						<ProfileCard href='' menu='Sair' />
					</BoxCard>
				</Section>
			</>
		</Container>
	);
};

export default Profile;
