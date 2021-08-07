import React from 'react';
import Link from 'next/link';
import Button from '../../../components/Button';
import { Section, Text } from '../../../styles/customer/success';

const Success: React.FC = () => {
	return (
		<Section>
			<Text>Compra concluída!</Text>
			<Link href='/customer/orders'>
				<Button width='22rem'>
					<span>Ver pedidos</span>
				</Button>
			</Link>
			<Link href='/customer/home'>
				<Button width='22rem'>
					<span>Voltar</span>
				</Button>
			</Link>
		</Section>
	);
};

export default Success;
