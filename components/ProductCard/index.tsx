import React from 'react';
import Link from 'next/link';
import { BoxCard, Image, Text, Description, Composition, Price, Availability } from './styles';

interface Props {
	productId: string;
	description: string;
	composition?: string;
	price: number;
	src: string;
	availability?: boolean;
	storeName?: string;
	showStoreName?: boolean;
}

const ProductCard: React.FC<Props> = ({
	productId,
	description,
	composition,
	price,
	src,
	availability,
	storeName,
	showStoreName,
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
							{composition && <Composition>{composition}</Composition>}
							<Price style={{ opacity: '40%' }}>R$ {priceConverted}</Price>
							{showStoreName && <Composition>{storeName}</Composition>}
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
							{composition && <Composition>{composition}</Composition>}
							{showStoreName && <Composition>{storeName}</Composition>}
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
