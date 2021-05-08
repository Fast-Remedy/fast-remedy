import React from "react";
import { Nav, Image } from "./styles";

const Header: React.FC = () => (
	<header>
		<Nav>
			{/* <Image
				className="ml-3"
				src="/images/logos/fastremedy-logo-5.png"
				alt="FastRemedy logo"
				width="100px"
				height="100px"
			/> */}
			<Image
				className="ml-3"
				src="/images/icons/search.svg"
				alt="pesquisar"
				width="100px"
				height="100px"
			/>
			<Image
				className="ml-3"
				src="/images/icons/shopping-cart.svg"
				alt="carrinho"
				width="100px"
				height="100px"
			/>
			<Image
				margin="0"
				src="/images/icons/user.svg"
				alt="perfil"
				width="100px"
				height="100px"
			/>
		</Nav>
	</header>
);

export default Header;
