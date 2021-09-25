import React from 'react';
import Link from 'next/link';
import {
	HeaderContainer,
	Content,
	TitleImage,
	Separator,
	Nav,
	Image,
	Text,
	Picture,
} from './styles';

import { useNavigation } from '../../contexts/NavigationContext';

const CustomerHeader: React.FC = () => {
	const { navigation } = useNavigation();

	return (
		<HeaderContainer>
			<Content>
				<Link href='/customer/home'>
					<TitleImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
				</Link>
				<Separator />
				<Nav>
					<Link href='/customer/home'>
						<Picture className={navigation.home && 'active'}>
							<Image
								className={navigation.home && 'active'}
								src='/images/icons/home.png'
								alt='Home'
							/>
							<Text className={navigation.home && 'active'}>Home</Text>
						</Picture>
					</Link>
					<Link href='/customer/search'>
						<Picture className={navigation.search && 'active'}>
							<Image
								className={navigation.search && 'active'}
								src='/images/icons/search.png'
								alt='Pesquisar'
							/>
							<Text className={navigation.search && 'active'}>Buscar</Text>
						</Picture>
					</Link>
					<Link href='/customer/orders'>
						<Picture className={navigation.orders && 'active'}>
							<Image
								className={navigation.orders && 'active'}
								src='/images/icons/orders.png'
								alt='Pedidos'
							/>
							<Text className={navigation.orders && 'active'}>Pedidos</Text>
						</Picture>
					</Link>
					<Link href='/customer/profile'>
						<Picture className={navigation.profile && 'active'}>
							<Image
								className={navigation.profile && 'active'}
								src='/images/icons/profile.png'
								alt='Perfil'
							/>
							<Text className={navigation.profile && 'active'}>Perfil</Text>
						</Picture>
					</Link>
				</Nav>
			</Content>
		</HeaderContainer>
	);
};

export default CustomerHeader;
