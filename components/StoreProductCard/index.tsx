import React from 'react';
import Link from 'next/link';
import { BoxCard, Image, Text, Description, Price, Availability } from './styles';

interface Props {
	productId: string;
	description: string;
	price: number;
	src: string;
	availability: string;
}

const StoreProductCard: React.FC<Props> = ({
	productId,
	description,
	price,
	src,
	availability,
}) => (
	<Link href={`/store/product/${productId}`}>
		<BoxCard>
			<Text>
				<Description>{description}</Description>
				<Price>R$ {price.toString().replace('.', ',')}</Price>
				{availability === 'soldOff' && <Availability>Esgotado!</Availability>}
			</Text>
			<Image src={src} alt={description} />
		</BoxCard>
	</Link>
);

export default StoreProductCard;
