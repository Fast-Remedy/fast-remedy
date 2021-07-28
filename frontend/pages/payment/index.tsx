import React from "react";
import Header from "../../components/Header";
import Card from "../../components/StoreCard";
import { Text, Title, Section, BoxCard, Price } from "./styles";
import { Button } from "../../components/Button/styles";
import Theme from "../theme";

const Payment: React.FC = () => {
	return (
		<main>
			<Header />
			<Section>
				<Title>Formas de Pagamento</Title>
				<div>
					<Button color={Theme.colors.white} bg={Theme.colors.lightGreen}>
						Voltar
					</Button>
				</div>
				<BoxCard>
					<Card src="/images/logos/card.svg">
						<div>
							<Text>Cartão</Text>
						</div>
					</Card>
					<Card src="/images/logos/card.svg">
						<div>
							<Text>Cartão</Text>
						</div>
					</Card>
					<Card src="/images/logos/card.svg">
						<div>
							<Text>Cartão</Text>
						</div>
					</Card>
				</BoxCard>
			</Section>
		</main>
	);
};

export default Payment;
