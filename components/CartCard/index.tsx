import React from 'react';
import ButtonsContainer from '../ButtonsContainer';
import Button from '../Button';
import { BoxCard, Line, Image, Text, Quantity, Store, Description, Price } from './styles';
import Theme from '../../styles/theme';

interface Props {
	quantity: number;
	store: string;
	description: string;
	price: number;
	src: string;
}

const CartCard: React.FC<Props> = ({ quantity, store, description, price, src }) => {
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
						className='icon margin'
						width='8rem'
						height='3rem'
						color={Theme.colors.white}
						backgroundColor={Theme.colors.red}
					>
						<svg
							className='w-6 h-6'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
								clipRule='evenodd'
							/>
						</svg>
						Remover
					</Button>
				</ButtonsContainer>
			</Line>
		</BoxCard>
	);
};

export default CartCard;
