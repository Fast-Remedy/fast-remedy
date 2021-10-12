import React from 'react';
import Button from '../Button';
import { BoxCard, Text, Description, LeftDiv } from './styles';

interface Props {
	isActive?: boolean;
	street: string;
	houseNumber: string;
	complement?: string;
	neighborhood: string;
	city: string;
	state: string;
	onClick: (item: any) => void;
	deleteFunction: (item: any) => void;
}

const AddressCard: React.FC<Props> = ({
	isActive,
	street,
	houseNumber,
	complement,
	neighborhood,
	city,
	state,
	onClick,
	deleteFunction,
}) => (
	<BoxCard className={isActive && 'active'}>
		<LeftDiv onClick={onClick}>
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
		</LeftDiv>
		<Button className='button' width='3rem' onClick={deleteFunction} style={{ width: '20%' }}>
			<img src='/images/icons/trash.png' alt='Excluir' />
		</Button>
	</BoxCard>
);

export default AddressCard;
