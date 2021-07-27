import React from 'react';
import Button from '../button';
import {
	BoxCard,
	Line,
	Image,
	Text,
	Quantity,
	Description,
	Price,
} from './styles';
import Theme from '../../pages/theme';

interface Props {
	quantity: number;
	description: string;
	price: number;
	src: string;
}

const CartCard: React.FC<Props> = ({ quantity, description, price, src }) => (
	<BoxCard>
		<Line>
			<Text>
				<Quantity>{quantity}x</Quantity>
				<Description>{description}</Description>
				<Price>R$ {price.toString().replace('.', ',')}</Price>
			</Text>
			<Image src={src} alt={description} />
		</Line>
		<Line>
			<Button
				width='2rem'
				color={Theme.colors.white}
				backgroundColor={Theme.colors.blue}
			>
				-
			</Button>
			<Button
				width='2rem'
				color={Theme.colors.white}
				backgroundColor={Theme.colors.blue}
			>
				+
			</Button>
			<Button
				width='6rem'
				color={Theme.colors.white}
				backgroundColor={Theme.colors.red}
			>
				Remover
			</Button>
		</Line>
	</BoxCard>
);

export default CartCard;
