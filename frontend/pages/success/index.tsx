import React from 'react';
import Link from 'next/link';
import Button from '../../components/Button';
import { Section, Text } from './styles';

const Success: React.FC = () => {
	return (
		<Section>
			<Text>Compra concluída</Text>
			<Link href='/'>
				<Button width='22rem'>
					<span>Voltar</span>
				</Button>
			</Link>
		</Section>
	);
};

export default Success;
