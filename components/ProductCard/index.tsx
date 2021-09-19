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

const ProductCard: React.FC<Props> = ({ productId, description, price, src, availability }) => (
	<>
		{availability === 'soldOff' ? (
			<>
				<BoxCard style={{filter: 'none', cursor: 'not-allowed'}}>
					<Text>
						<Description style={{ opacity: '40%' }}>{description}</Description>
						<Price style={{ opacity: '40%' }}>
							R$ {price.toString().replace('.', ',')}
						</Price>
						<Availability>Esgotado!</Availability>
					</Text>
					<Image style={{ opacity: '40%' }} src={src} alt={description} />
				</BoxCard>
			</>
		) : (
			<Link href={`/customer/product/${productId}`}>
				<BoxCard>
					<Text>
						<Description>{description}</Description>
						<Price>R$ {price.toString().replace('.', ',')}</Price>
					</Text>
					<Image src={src} alt={description} />
				</BoxCard>
			</Link>
		)}
	</>
);

export default ProductCard;
