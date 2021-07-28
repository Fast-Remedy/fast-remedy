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

const Header: React.FC = () => (
	<HeaderContainer>
		<Content>
			<Link href='/home'>
				<TitleImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
			</Link>
			<Separator />
			<Nav>
				<Link href='/home'>
					<Picture>
						<Image src='/images/icons/home.png' alt='Home' />
						<Text>Home</Text>
					</Picture>
				</Link>
				<Link href='/search'>
					<Picture>
						<Image src='/images/icons/search.png' alt='Pesquisar' />
						<Text>Buscar</Text>
					</Picture>
				</Link>
				<Link href='/orders'>
					<Picture>
						<Image src='/images/icons/orders.png' alt='carrinho' />
						<Text>Pedidos</Text>
					</Picture>
				</Link>
				<Link href='/profile'>
					<Picture>
						<Image src='/images/icons/profile.png' alt='perfil' />
						<Text>Perfil</Text>
					</Picture>
				</Link>
			</Nav>
		</Content>
	</HeaderContainer>
);

export default Header;
