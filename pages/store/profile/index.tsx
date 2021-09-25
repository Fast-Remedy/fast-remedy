import React, { useEffect } from 'react';

import Container from '../../../components/Container';
import TitleBox from '../../../components/TitleBox';
import ProfileCard from '../../../components/ProfileCard';

import { Section, BoxCard } from '../../../styles/customer/profile';

import { useNavigation } from '../../../contexts/NavigationContext';

const Profile: React.FC = () => {
	const { setStoreNavigationState } = useNavigation();

	useEffect(() => {
		setStoreNavigationState({
			home: false,
			orders: false,
			catalog: false,
			profile: true,
		});
	}, []);

	return (
		<Container>
			<>
				<Section>
					<div className='title'>
						<TitleBox title='Perfil' />
					</div>
					<BoxCard>
						<ProfileCard href='store/address' menu='Endereço e Entrega' />
					</BoxCard>
					<BoxCard>
						<ProfileCard href='store/payment' menu='Conta Bancária' />
					</BoxCard>
					<BoxCard>
						<ProfileCard href='store/edit' menu='Dados da Empresa' />
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
