import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { BoxCard, Image, Text, Title, Subtitle } from './styles';

interface Props {
	storeId: string;
	name: string;
	fee: number;
	estimatedTime: number;
	src: string;
}

const StoreCard: React.FC<Props> = ({ storeId, name, fee, estimatedTime, src }) => {
	const feeString = fee.toFixed(2);
	const feeConverted = feeString.replace('.', ',');

	return (
		<Link href={`/customer/stores/${storeId}`}>
			<BoxCard>
				<Image src={src} alt={name} />
				<Text>
					<Title>{name}</Title>
					<Subtitle>
						R$ {feeConverted} · {estimatedTime} min
					</Subtitle>
				</Text>
				<FiChevronRight size={30} style={{ color: '#fff' }} />
			</BoxCard>
		</Link>
	);
};

export default StoreCard;
