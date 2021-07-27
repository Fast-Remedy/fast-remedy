import React from "react";
import Button from "../../components/button";
import Theme from "../theme";
import { Section, Title, Input, Form, BoxText, BoxInput } from "./styles";

const RegisterOne: React.FC = () => {
	return (
		<main>
			<Section>
				<Form>
					<BoxText>
						<Title>Cadastre-se</Title>
					</BoxText>
					<BoxInput>
						<Input type="text" margin=" 0 0 -2px 0" placeholder="Nome" />
						<Input type="text" margin=" 0 0 -2px 0" placeholder="Sobrenome" />
						<Input type="email" margin=" 0 0 -2px 0" placeholder="E-mail" />
						<Input type="password" margin=" 0 0 -2px 0" placeholder="Senha" />
					</BoxInput>
					<Button
						color={Theme.colors.white}
						bg={Theme.colors.lightGreen}
						width="80px"
					>
						Voltar
					</Button>
					<Button
						color={Theme.colors.white}
						bg={Theme.colors.yellow}
						width="80px"
					>
						Próximo
					</Button>
				</Form>
			</Section>
		</main>
	);
};

export default RegisterOne;
