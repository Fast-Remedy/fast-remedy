import React from 'react';
import Theme from '../theme';
import Button from '../../components/Button';
import { Section, LogoImage } from './styles';

const Login: React.FC = () => {
	return (
		<Section>
			<LogoImage src='/images/logos/fastremedy-logo.png' alt='FastRemedy' />
				<Button
					width='22rem'
				>
					<img src="/images/logos/google-icon.png" alt="Google" width='25px' />
                    <span>Faça seu login com o Google</span>
				</Button>
		</Section>
	);
};

export default Login;
