import React from 'react';
import { BoxCard, Line, Image, Text, Description, Price, Availability } from './styles';

interface Props {
	description: string;
	src: string;
	price: number;
	availability?: string;
}

const ProductDetailsCard: React.FC<Props> = ({ description, src, price, availability }) => (
	<BoxCard>
		<Line>
			<Image src={src} alt={description} />
			<Text>
				<Description>{description}</Description>
				<Price>R$ {price.toString().replace('.', ',')}</Price>
				{availability === 'soldOff' && <Availability>Esgotado!</Availability>}
			</Text>
		</Line>
	</BoxCard>
);

export default ProductDetailsCard;
