import React from 'react';
import Link from 'next/link';
import { BoxCard, Image, Text, Description, Price, Availability } from './styles';

interface Props {
	productId: string;
	description: string;
	price: number;
	src: string;
	availability?: boolean;
	storeName: string;
}

const ProductCard: React.FC<Props> = ({
	productId,
	description,
	price,
	src,
	availability,
	storeName,
}) => {
	const priceString = price.toFixed(2);
	const priceConverted = priceString.replace('.', ',');

	return (
		<>
			{!availability ? (
				<>
					<BoxCard style={{ filter: 'none', cursor: 'not-allowed' }}>
						<Text>
							<Description style={{ opacity: '40%' }}>{description}</Description>
							<Price style={{ opacity: '40%' }}>R$ {priceConverted}</Price>
							<Availability>Esgotado!</Availability>
						</Text>
						<Image style={{ opacity: '40%' }} src={src} alt={description} />
					</BoxCard>
				</>
			) : (
				<Link href={`/customer/product/${storeName}/${productId}`}>
					<BoxCard>
						<Text>
							<Description>{description}</Description>
							<Price>R$ {priceConverted}</Price>
						</Text>
						<Image src={src} alt={description} />
					</BoxCard>
				</Link>
			)}
		</>
	);
};

export default ProductCard;
