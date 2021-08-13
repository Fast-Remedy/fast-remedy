import React from 'react';
import {
	BoxCard,
	Line,
	Image,
	Text,
	Quantity,
	Store,
	Description,
	Price,
} from './styles';
import Theme from '../../styles/theme';

interface Props {
	quantity: number;
	store: string;
	description: string;
	price: number;
	src: string;
}

const OrderCard: React.FC<Props> = ({
	quantity,
	store,
	description,
	price,
	src,
}) => {
	return (
		<BoxCard>
			<Line>
				<Text>
					<Quantity>{quantity}x</Quantity>
					<Description>{description}</Description>
					<Store>{store}</Store>
					<Price>R$ {price.toString().replace('.', ',')}</Price>
				</Text>
				<Image src={src} alt={description} />
			</Line>
		</BoxCard>
	);
};

export default OrderCard;
