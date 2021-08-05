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
import Theme from '../../styles/theme';

interface Props {
	quantity: number;
	store: string;
	description: string;
	price: number;
	src: string;
}

const CartCard: React.FC<Props> = ({
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
			<Line>
				<ButtonsContainer width={'150px'}>
					<>
						<Button
							width='3rem'
							height='3rem'
							color={Theme.colors.white}
							backgroundColor={Theme.colors.green}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='3'
									d='M20 12H4'
								/>
							</svg>
						</Button>
						<Button
							width='3rem'
							height='3rem'
							color={Theme.colors.white}
							backgroundColor={Theme.colors.green}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='3'
									d='M12 4v16m8-8H4'
								/>
							</svg>
						</Button>
					</>
				</ButtonsContainer>
				<ButtonsContainer justify='flex-end'>
					<Button
						width='7.5rem'
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
};

export default CartCard;
