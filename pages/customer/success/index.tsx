import React from 'react';
import router from 'next/router';
import Button from '../../../components/Button';
import { Section, Text } from '../../../styles/customer/success';

import Container from '../../../components/Container';

const Success = () => {
	return (
		<Container style={{ overflow: 'hidden', marginTop: 0 }}>
			<>
				<Section style={{ margin: 0, maxWidth: '100%' }}>
					<Text>Compra concluída!</Text>
					<Button
						className='icon back right'
						width='22rem'
						onClick={() => router.push('/customer/orders')}
					>
						<img
							src='/images/icons/orders.png'
							alt='Pedidos'
							style={{ filter: 'brightness(0)' }}
						/>
						Ver pedidos
					</Button>
					<Button
						className='icon back'
						width='22rem'
						onClick={() => router.push('/customer/home')}
					>
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
				</Section>
			</>
		</Container>
	);
};

export default Success;
