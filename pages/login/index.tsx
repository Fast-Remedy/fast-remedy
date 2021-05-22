import React from "react";
import Button from "../../components/button";
import Theme from "../theme";
import { Section, Title, Text, Input, Form, BoxText, BoxText2 } from "./styles";

const Login: React.FC = () => {
	return (
		<main>
			<Section>
				<Form>
					<BoxText>
						<Title>Login</Title>
						<Text>criar conta</Text>
					</BoxText>
					<div>
						<Input type="email" radius="10px 10px 0 0" margin=" 0 0 -2px 0" placeholder="E-mail"/>
						<Input type="password" radius="0 0 10px 10px" placeholder="Senha"/>
					</div>
					<BoxText2>
						<Text>Esqueci minha senha</Text>
					</BoxText2>
					<Button color={Theme.colors.white} bg={Theme.colors.lightGreen} width="260px">Login</Button>
				</Form>
			</Section>
		</main>
	);
};

export default Login;
