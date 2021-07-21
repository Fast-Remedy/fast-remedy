import React from "react";
import Header from "../../components/header";
import ProductCard from "../../components/productCard";
import ButtonOne from "../../components/button";
import { Text, Title, Section, BoxCard, Price } from "./styles";
import { Button } from "../../components/button/styles";
import Theme from "../theme";

const Store: React.FC = () => {
	return (
		<main>
			<Header />
			<Section>
				<Title>Drogaria Moderna</Title>
				<div>
					<Button color={Theme.colors.white} bg={Theme.colors.lightGreen}>
						Voltar
					</Button>
				</div>
				<BoxCard>
					<ProductCard src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</ProductCard>
					<ProductCard src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</ProductCard>
					<ProductCard src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</ProductCard>
					<ProductCard src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</ProductCard>
					<ProductCard src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</ProductCard>
					<ProductCard src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<ButtonOne>Ver produtos</ButtonOne>
						</div>
					</ProductCard>
				</BoxCard>
			</Section>
		</main>
	);
};

export default Store;
