import React from "react";
import Buttons from "../../components/Button";
import Theme from "../theme";
import { Section, Text, BoxButton } from "./styles";

const SuccessfulTwo: React.FC = () => {
	return (
		<main>
			<Section>
				<Text>Compra concluída</Text>
				<BoxButton>
					<Buttons
						color={Theme.colors.white}
						bg={Theme.colors.lightGreen}
						width="260px"
					>
						Concluir
					</Buttons>
				</BoxButton>
			</Section>
		</main>
	);
};

export default SuccessfulTwo;
