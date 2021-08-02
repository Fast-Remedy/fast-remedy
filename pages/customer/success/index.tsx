import React from 'react';
import Link from 'next/link';
import Button from '../../../components/Button';
import { Section, Text } from '../../../styles/success';

const Success: React.FC = () => {
	return (
		<Section>
			<Text>Compra concluída!</Text>
			<Link href='/orders'>
				<Button width='22rem'>
					<span>Ver pedidos</span>
				</Button>
			</Link>
			<Link href='/home'>
				<Button width='22rem'>
					<span>Voltar</span>
				</Button>
			</Link>
		</Section>
	);
};

export default Success;
