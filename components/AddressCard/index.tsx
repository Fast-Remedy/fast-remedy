import React from 'react';
import Button from '../Button';
import { BoxCard, Text, Description } from './styles';

interface Props {
	isActive?: boolean;
	postalCode: string;
	street: string;
	houseNumber: string;
	complement?: string;
	neighborhood: string;
	city: string;
	state: string;
}

const AddressCard: React.FC<Props> = ({
	isActive,
	street,
	houseNumber,
	complement,
	neighborhood,
	city,
	state,
}) => (
	<BoxCard className={isActive && 'active'}>
		<img src='/images/icons/location.png' alt='Endereço' />
		<Text>
			<Description>
				{street}, {houseNumber}
			</Description>
			{complement && <Description>{complement}</Description>}
			<Description>{neighborhood}</Description>
			<Description>
				{city} - {state}
			</Description>
		</Text>
		<Button width='3rem'>
			<img src='/images/icons/trash.png' alt='Excluir' />
		</Button>
	</BoxCard>
);

export default AddressCard;
