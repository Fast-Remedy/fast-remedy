import React from "react";
import Button from "../../components/button";
import Theme from "../theme";
import { Section, Title, Input, Form, BoxText, BoxInput } from "./styles";

const Recover: React.FC = () => {
	return (
		<main>
			<Section>
				<Form>
					<BoxText>
						<Title>E-mail</Title>
					</BoxText>
					<BoxInput>
						<Input type="email" margin=" 0 0 -2px 0" placeholder="E-mail" />
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
						Enviar
					</Button>
				</Form>
			</Section>
		</main>
	);
};

export default Recover;
