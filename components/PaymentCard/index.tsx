import React from 'react';
import Button from '../Button';
import { BoxCard, Text, Description } from './styles';

interface Props {
	className?: string;
	type: string;
	processor: string;
	finalCardNumbers: string;
}

const PaymentCard: React.FC<Props> = ({
	className,
	type,
	processor,
	finalCardNumbers,
}) => (
	<BoxCard className={className}>
		<img src='/images/icons/card.png' alt='Pagamento' />
		<Text>
			<Description>{type}</Description>
			<Description>
				{processor} (final {finalCardNumbers})
			</Description>
		</Text>
		<Button width='3rem'>
			<img src='/images/icons/trash.png' alt='Excluir' />
		</Button>
	</BoxCard>
);

export default PaymentCard;
