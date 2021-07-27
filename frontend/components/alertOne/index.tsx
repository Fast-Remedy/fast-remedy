import React from "react";
import Theme from "../../pages/theme";
import Button from "../button";
import { Alert, Section, Text, Input, BoxCount } from "./styles";

const AlertOne: React.FC = () => {
	return (
		<Section>
			<Alert>
				<div>
					<Text>Informe a quantidade</Text>
				</div>
				<BoxCount>
					<Button
						color={Theme.colors.white}
						bg={Theme.colors.red}
						radius="10px 0 0 10px"
						width="50px"
						size="20px"
					>
						-
					</Button>
					<Input type="number" max="200" value="0"/>
					<Button
						color={Theme.colors.white}
						bg={Theme.colors.lightGreen}
						radius="0 10px 10px 0"
						width="50px"
						size="20px"
					>
						+
					</Button>
				</BoxCount>
				<div>
					<Button
						color={Theme.colors.white}
						bg={Theme.colors.lightGreen}
						width="80px"
						>Voltar</Button>
					<Button
					color={Theme.colors.white}
					bg={Theme.colors.yellow}
					width="80px"
					>Finalizar</Button>
				</div>
			</Alert>
		</Section>
	);
};

export default AlertOne;
