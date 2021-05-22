import React from "react";
import Header from "../components/header";
import Card from "../components/card";
import ButtonOne from "../components/buttonOne";
import { Text, Title, Section, BoxCard } from "./styles";

const Home: React.FC = () => {
	return (
		<main>
			<Header />
			<Section>
				<Title>Lojas</Title>
				<BoxCard>
					<Card>
						<div>
							<Text>Drogaria Moderna</Text>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</Card>
					<Card>
						<div>
							<Text>Drogaria Moderna</Text>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</Card>
					<Card>
						<div>
							<Text>Drogaria Moderna</Text>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</Card>
					<Card>
						<div>
							<Text>Drogaria Moderna</Text>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</Card>
					<Card>
						<div>
							<Text>Drogaria Moderna</Text>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</Card>
					<Card>
						<div>
							<Text>Drogaria Moderna</Text>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</Card>
				</BoxCard>
			</Section>
		</main>
	);
};

export default Home;
