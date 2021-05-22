import React from "react";
import Header from "../../components/header";
import Card from "../../components/card";
import { Text, Title, Section, BoxCard, Price } from "./styles";
import { Button } from "../../components/button/styles";
import Theme from "../theme";

const Cart: React.FC = () => {
	return (
		<main>
			<Header />
			<Section>
				<Title>Drogaria Moderna</Title>
				<div>
					<Button width="95px" color={Theme.colors.white} bg={Theme.colors.lightGreen}>
						Finalizar
					</Button>
					<Button width="80px" color={Theme.colors.white} bg={Theme.colors.lightGreen}>
						Voltar
					</Button>
				</div>
				<BoxCard>
					<Card src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.red}>
								Redirar
							</Button>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.yellow}>
								Total: 4
							</Button>
						</div>
					</Card>
					<Card src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.red}>
								Redirar
							</Button>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.yellow}>
								Total: 4
							</Button>
						</div>
					</Card>
					<Card src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.red}>
								Redirar
							</Button>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.yellow}>
								Total: 4
							</Button>
						</div>
					</Card>
					<Card src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.red}>
								Redirar
							</Button>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.yellow}>
								Total: 4
							</Button>
						</div>
					</Card>
					<Card src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.red}>
								Redirar
							</Button>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.yellow}>
								Total: 4
							</Button>
						</div>
					</Card>
					<Card src="/images/logos/remedy.svg">
						<div>
							<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
						</div>
						<div>
							<Price>R$ 6,50</Price>
						</div>
						<div>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.red}>
								Redirar
							</Button>
							<Button width="80px" color={Theme.colors.white} bg={Theme.colors.yellow}>
								Total: 4
							</Button>
						</div>
					</Card>
				</BoxCard>
			</Section>
		</main>
	);
};

export default Cart;
