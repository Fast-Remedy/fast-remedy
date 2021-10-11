import React from 'react';
import Link from 'next/link';
import { BoxCard, Image, Text, Description, Price, Availability } from './styles';

interface Props {
	productId: string;
	description: string;
	price: number;
	src: string;
	availability: boolean;
}

const StoreProductCard: React.FC<Props> = ({
	productId,
	description,
	price,
	src,
	availability,
}) => {
	const priceString = price.toFixed(2);
	const priceConverted = priceString.replace('.', ',');

	return (
		<Link href={`/store/product/${productId}`}>
			<BoxCard>
				<Text>
					<Description>{description}</Description>
					<Price>R$ {priceConverted}</Price>
					{!availability && <Availability>Esgotado!</Availability>}
				</Text>
				<Image src={src} alt={description} />
			</BoxCard>
		</Link>
	);
};

export default StoreProductCard;
