import React from "react";
import { Nav, Image, Text, Picture } from "./styles";

const Header: React.FC = () => (
	<header>
		<Nav>
			<Picture>
				<Image
					src="/images/icons/home.svg"
					alt="FastRemedy logo"
					width="100px"
					height="100px"
				/>
				<Text>Home</Text>
			</Picture>
			<Picture>
				<Image
					src="/images/icons/search.svg"
					alt="pesquisar"
					width="100px"
					height="100px"
				/>
				<Text>Buscar</Text>
			</Picture>
			<Picture>
				<Image
					src="/images/icons/shopping-cart.svg"
					alt="carrinho"
					width="100px"
					height="100px"
				/>
				<Text>Carrinho</Text>
			</Picture>
			<Picture margin="0">
				<Image
					src="/images/icons/user.svg"
					alt="perfil"
					width="100px"
					height="100px"
				/>
				<Text>Perfil</Text>
			</Picture>
		</Nav>
	</header>
);

export default Header;
