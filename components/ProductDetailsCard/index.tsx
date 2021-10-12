import React from 'react';
import {
	BoxCard,
	Line,
	Image,
	Text,
	Description,
	Composition,
	Price,
	Availability,
} from './styles';

interface Props {
	description: string;
	composition?: string;
	src: string;
	price: number;
	availability?: boolean;
}

const ProductDetailsCard: React.FC<Props> = ({
	description,
	composition,
	src,
	price,
	availability,
}) => {
	const priceString = price.toFixed(2);
	const priceConverted = priceString.replace('.', ',');

	return (
		<BoxCard>
			<Line>
				<Image src={src} alt={description} />
				<Text>
					<Description>{description}</Description>
					{composition && <Composition>{composition}</Composition>}
					<Price>R$ {priceConverted}</Price>
					{!availability && <Availability>Esgotado!</Availability>}
				</Text>
			</Line>
		</BoxCard>
	);
};

export default ProductDetailsCard;
