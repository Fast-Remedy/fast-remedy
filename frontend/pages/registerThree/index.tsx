import React from "react";
import Button from "../../components/Button";
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
						<Input
							type="text"
							margin=" 0 0 -2px 0"
							placeholder="Número do Cartão"
						/>
						<Input type="text" margin=" 0 0 -2px 0" placeholder="Validade" />
						<Input
							type="text"
							margin=" 0 0 -2px 0"
							placeholder="Código de Segurança"
						/>
						<Input
							type="text"
							margin=" 0 0 -2px 0"
							placeholder="Nome do titular"
						/>
						<Input type="text" margin=" 0 0 -2px 0" placeholder="CPF" />
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
						Concluir
					</Button>
				</Form>
			</Section>
		</main>
	);
};

export default RegisterOne;
