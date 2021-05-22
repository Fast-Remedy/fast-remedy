import React from 'react';
import Buttons from "../../components/button";
import Theme from "../theme";
import { Section, Text, BoxButton } from './styles';

const SuccessfulOne: React.FC = () => {
	return (
		<main>
			<Section>
				<Text>E-mail de recuperção enviado</Text>
				<BoxButton>
						<Buttons color={Theme.colors.white} bg={Theme.colors.lightGreen} width="260px">
							Concluir
						</Buttons>
				</BoxButton>
			</Section>
		</main>
	);
};

export default SuccessfulOne;