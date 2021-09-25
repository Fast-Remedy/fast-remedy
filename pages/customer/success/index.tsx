import React from 'react';
import Link from 'next/link';
import Button from '../../../components/Button';
import { Section, Text } from '../../../styles/customer/success';

const Success: React.FC = () => {
	return (
		<Section>
			<Text>Compra concluída!</Text>
			<Link href='/customer/orders'>
				<Button className='icon back right' width='22rem'>
					<img
						src='/images/icons/orders.png'
						alt='Pedidos'
						style={{ filter: 'brightness(0)' }}
					/>
					Ver pedidos
				</Button>
			</Link>
			<Link href='/customer/home'>
				<Button className='icon back' width='22rem'>
					<svg
						className='icon'
						fill='currentColor'
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
							clipRule='evenodd'
						/>
					</svg>
					Voltar
				</Button>
			</Link>
		</Section>
	);
};

export default Success;
