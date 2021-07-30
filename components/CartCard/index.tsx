import React from 'react';
import ButtonsContainer from '../ButtonsContainer';
import Button from '../Button';
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
import Theme from '../../pages/theme';

interface Props {
	quantity: number;
    store: string;
	description: string;
	price: number;
	src: string;
}

const CartCard: React.FC<Props> = ({ quantity, store, description, price, src }) => (
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
		<Line>
			<ButtonsContainer width='25%'>
				<>
					<Button
						width='2.5rem'
						height='2.5rem'
						color={Theme.colors.white}
						backgroundColor={Theme.colors.green}
					>
						-
					</Button>
					<Button
						width='2.5rem'
						height='2.5rem'
						color={Theme.colors.white}
						backgroundColor={Theme.colors.green}
					>
						+
					</Button>
				</>
			</ButtonsContainer>
			<ButtonsContainer width='75%' justify='flex-end'>
				<Button
					width='6rem'
                    height='3rem'
					color={Theme.colors.white}
					backgroundColor={Theme.colors.red}
				>
					Remover
				</Button>
			</ButtonsContainer>
		</Line>
	</BoxCard>
);

export default CartCard;
