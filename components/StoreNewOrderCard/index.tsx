import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { BoxCard, Text, Name, Line } from './styles';

interface Props {
	orderId: string;
	customerName: string;
	customerAddress: string;
	items: number;
	time: string;
}

const StoreNewOrderCard: React.FC<Props> = ({
	orderId,
	customerName,
	customerAddress,
	items,
	time,
}) => (
	<Link href={`/store/order/${orderId}`}>
		<BoxCard>
			<Text>
				<Name>{customerName}</Name>
				<Line>
					{items} item(s) - {customerAddress}
				</Line>
				<Line>{time}</Line>
			</Text>
			<FiChevronRight size={30} style={{ color: '#212121' }} />
		</BoxCard>
	</Link>
);

export default StoreNewOrderCard;
