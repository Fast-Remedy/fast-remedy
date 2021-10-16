import React from 'react';
import { BoxCard, Line, Image, Text, Quantity, Composition, Description, Price } from './styles';
import Theme from '../../styles/theme';

interface Props {
	quantity: number;
	description: string;
	composition: string;
	price: number;
	src: string;
}

const OrderCard: React.FC<Props> = ({ quantity, description, composition, price, src }) => {
	return (
		<BoxCard>
			<Line>
				<Text>
					<Quantity>{quantity}x</Quantity>
					<Description>{description}</Description>
					{composition && <Composition>{composition}</Composition>}
					<Price>R$ {price.toString().replace('.', ',')}</Price>
				</Text>
				<Image src={src} alt={description} />
			</Line>
		</BoxCard>
	);
};

export default OrderCard;
