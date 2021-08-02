import React from 'react';
import Link from 'next/link';
import { BoxCard, Image, Text, Description, Price } from './styles';

interface Props {
	productId: string;
	description: string;
	price: number;
	src: string;
}

const ProductCard: React.FC<Props> = ({
	productId,
	description,
	price,
	src,
}) => (
	<Link href={`/customer/product/${productId}`}>
		<BoxCard>
			<Text>
				<Description>{description}</Description>
				<Price>R$ {price.toString().replace('.', ',')}</Price>
			</Text>
			<Image src={src} alt={description} />
		</BoxCard>
	</Link>
);

export default ProductCard;
