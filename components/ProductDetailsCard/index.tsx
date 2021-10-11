import React from 'react';
import { BoxCard, Line, Image, Text, Description, Price, Availability } from './styles';

interface Props {
	description: string;
	src: string;
	price: number;
	availability?: boolean;
}

const ProductDetailsCard: React.FC<Props> = ({ description, src, price, availability }) => {
	const priceString = price.toFixed(2);
	const priceConverted = priceString.replace('.', ',');

	return (
		<BoxCard>
			<Line>
				<Image src={src} alt={description} />
				<Text>
					<Description>{description}</Description>
					<Price>R$ {priceConverted}</Price>
					{!availability && <Availability>Esgotado!</Availability>}
				</Text>
			</Line>
		</BoxCard>
	);
};

export default ProductDetailsCard;
