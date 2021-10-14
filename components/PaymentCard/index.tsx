import React from 'react';
import Button from '../Button';
import { BoxCard, Text, Description, LeftDiv } from './styles';

interface Props {
	isActive?: boolean;
	type: string;
	cardNumber: string;
	onClick: (item: any) => void;
	deleteFunction: (item: any) => void;
}

const PaymentCard: React.FC<Props> = ({ isActive, type, cardNumber, onClick, deleteFunction }) => {
	const card = cardNumber.split(' ');
	const finalNumber = card[3];
	let processor = '';
	if (card[0].startsWith('4')) {
		processor = 'Visa';
	} else if (card[0].startsWith('5')) {
		processor = 'Mastercard';
	} else if (card[0].startsWith('36') || card[0].startsWith('38')) {
		processor = 'Dinners Club';
	} else if (card[0].startsWith('6')) {
		processor = 'Discover';
	} else if (card[0].startsWith('35')) {
		processor = 'JCB';
	} else if (card[0].startsWith('34') || card[0].startsWith('37')) {
		processor = 'American Express';
	} else {
		processor = 'Outro';
	}

	return (
		<BoxCard className={isActive && 'active'}>
			<LeftDiv onClick={onClick}>
				<img src='/images/icons/card.png' alt='Pagamento' />
				<Text>
					<Description>{type}</Description>
					<Description>
						{processor} (final {finalNumber})
					</Description>
				</Text>
			</LeftDiv>
			<Button onClick={deleteFunction} style={{ width: '20%' }}>
				<img src='/images/icons/trash.png' alt='Excluir' />
			</Button>
		</BoxCard>
	);
};

export default PaymentCard;
