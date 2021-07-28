import React from 'react';
import Button from '../components/Button';
import { Section, LogoImage } from './styles';

const Login: React.FC = () => {
    const handleLogin = async () => {
        try {
            // authentication
            window.location.href = '/home';
        } catch (err) {
            console.log(err);
        }
    }

	return (
		<Section>
			<LogoImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
			<Button width='22rem' onClick={handleLogin}>
				<img src='/images/logos/google-icon.png' alt='Google' width='25px' />
				<span>Faça seu login com o Google</span>
			</Button>
		</Section>
	);
};

export default Login;
