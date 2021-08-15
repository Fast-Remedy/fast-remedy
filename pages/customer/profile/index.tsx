import React from 'react';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import CartIcon from '../../../components/CartIcon';
import ProfileCard from '../../../components/ProfileCard';

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
				<Section>
					<div className='title'>
						<TitleBox title='Perfil' />
						<CartIcon />
					</div>
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
