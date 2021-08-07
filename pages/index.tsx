import React from 'react';

import Button from '../components/Button';
import { Section, LogoImage } from '../styles/index';

const Index: React.FC = () => {
	const handleLoginUser = async () => {
		try {
			// authentication
			window.location.href = '/customer/login';
		} catch (err) {
			console.log(err);
		}
	};

	const handleLoginStore = async () => {
		try {
			// authentication
			window.location.href = '/store/login';
		} catch (err) {
			console.log(err);
		}
	};

	const handleLoginDeliveryman = async () => {
		try {
			// authentication
			window.location.href = '/delivery/login';
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Section>
			<LogoImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
			<Button width='22rem' height='5rem' onClick={handleLoginUser}>
				<span>Entrar como Comprador</span>
			</Button>
			<span className='separator'>ou</span>
			<Button width='22rem' height='3rem' onClick={handleLoginStore}>
				<span>Entrar como Loja</span>
			</Button>
			<Button width='22rem' height='3rem' onClick={handleLoginDeliveryman}>
				<span>Entrar como Entregador</span>
			</Button>
		</Section>
	);
};

export default Index;
