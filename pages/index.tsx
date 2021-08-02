import React from 'react';

import Button from '../components/Button';
import { Section, LogoImage } from '../styles/index';

const Login: React.FC = () => {
	const handleLoginUser = async () => {
		try {
			// authentication
			window.location.href = '/customer/home';
		} catch (err) {
			console.log(err);
		}
	};

	const handleLoginStore = async () => {
		try {
			// authentication
			window.location.href = '/store/home';
		} catch (err) {
			console.log(err);
		}
	};

	const handleLoginDeliveryman = async () => {
		try {
			// authentication
			window.location.href = '/delivery/home';
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Section>
			<LogoImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
			<Button width='22rem' height='5rem' onClick={handleLoginUser}>
				<img src='/images/logos/google-icon.png' alt='Google' width='25px' />
				<span>Faça seu login com o Google</span>
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

export default Login;
