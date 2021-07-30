import React from 'react';
import Theme from '../../pages/theme';
import Button from '../Button';
import { Alert, Section, Text, Input, BoxCount } from './styles';

const Modal: React.FC = () => {
	return (
		<Section>
			<Alert>
				<div>
					<Text>Buscar</Text>
				</div>
				<BoxCount>
					<Input type='text' placeholder='Buscar' />
				</BoxCount>
				<div>
					<Button
						color={Theme.colors.white}
						backgroundColor={Theme.colors.green}
						width='80px'
					>
						Voltar
					</Button>
					<Button
						color={Theme.colors.white}
						backgroundColor={Theme.colors.green}
						width='80px'
					>
						Buscar
					</Button>
				</div>
			</Alert>
		</Section>
	);
};

export default Modal;
