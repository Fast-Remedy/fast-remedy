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

const StoreHeader: React.FC = () => {
	const { storeNavigation } = useNavigation();

	return (
		<HeaderContainer>
			<Content>
				<Link href='/store/home'>
					<TitleImage
						src='/images/logos/fastremedy-logo.png'
						alt='FastRemedy'
					/>
				</Link>
				<Separator />
				<Nav>
					<Link href='/store/home'>
						<Picture className={storeNavigation.home && 'active'}>
							<Image
								className={storeNavigation.home && 'active'}
								src='/images/icons/home.png'
								alt='Home'
							/>
							<Text className={storeNavigation.home && 'active'}>Home</Text>
						</Picture>
					</Link>
					<Link href='/store/orders'>
						<Picture className={storeNavigation.orders && 'active'}>
							<Image
								className={storeNavigation.orders && 'active'}
								src='/images/icons/orders.png'
								alt='Pedidos'
							/>
							<Text className={storeNavigation.orders && 'active'}>Pedidos</Text>
						</Picture>
					</Link>
					<Link href='/store/catalog'>
						<Picture className={storeNavigation.catalog && 'active'}>
							<Image
								className={storeNavigation.catalog && 'active'}
								src='/images/icons/catalog.png'
								alt='Catálogo'
							/>
							<Text className={storeNavigation.catalog && 'active'}>Catálogo</Text>
						</Picture>
					</Link>
					<Link href='/store/profile'>
						<Picture className={storeNavigation.profile && 'active'}>
							<Image
								className={storeNavigation.profile && 'active'}
								src='/images/icons/store.png'
								alt='Perfil'
							/>
							<Text className={storeNavigation.profile && 'active'}>Perfil</Text>
						</Picture>
					</Link>
				</Nav>
			</Content>
		</HeaderContainer>
	);
};

export default StoreHeader;
