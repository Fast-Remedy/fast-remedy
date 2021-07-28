import React from "react";
import Button from "../../components/Button";
import Theme from "../theme";
import { Section, Title, Input, Form, BoxText, BoxInput } from "./styles";

const RegisterTwo: React.FC = () => {
	return (
		<main>
			<Section>
				<Form>
					<BoxText>
						<Title>Cadastre-se</Title>
					</BoxText>
					<BoxInput>
						<Input type="text" margin=" 0 0 -2px 0" placeholder="Endereço" />
						<Input type="text" margin=" 0 0 -2px 0" placeholder="Bairro" />
						<Input type="text" margin=" 0 0 -2px 0" placeholder="Número" />
						<Input type="text" margin=" 0 0 -2px 0" placeholder="Complemento" />
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

export default RegisterTwo;
