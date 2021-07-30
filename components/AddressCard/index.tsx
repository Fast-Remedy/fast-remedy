import React from 'react';
import Button from '../Button';
import { BoxCard, Text, Description } from './styles';

interface Props {
    className?: string;
	postalCode: string;
	street: string;
	houseNumber: string;
	complement?: string;
	neighborhood: string;
	city: string;
	state: string;
}

const AddressCard: React.FC<Props> = ({
    className,
	street,
	houseNumber,
	complement,
    neighborhood,
	city,
	state,
}) => (
	<BoxCard className={className}>
        <img src="/images/icons/location.png" alt="Endereço" />
		<Text>
			<Description>{street}, {houseNumber}</Description>
			<Description>{complement}</Description>
			<Description>{neighborhood}</Description>
			<Description>{city} - {state}</Description>
		</Text>
        <Button width='3rem'>
        <img src="/images/icons/trash.png" alt="Apagar" />
        </Button>
	</BoxCard>
);

export default AddressCard;
