import React from 'react';
import Link from 'next/link';
import { Box, BoxEnd, Image, Items } from './styles';
import Theme from '../../styles/theme';

const CartIcon = () => {
	const { colors } = Theme;
	const items = 3;

	return (
		<Link href='/customer/cart' passHref>
			{true ? (
				<Box>
					{items >= 2 ? (
						<Items>{items} itens</Items>
					) : (
						<Items>{items} item</Items>
					)}
					<Image
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill={`${colors.green}`}
					>
						<path d='M 3 2 A 0.5 0.5 0 1 0 3 3 H 4.22 L 4.525 4.222 A 0.997 0.997 0 0 0 4.535 4.264 L 5.893 10 A 1 1 0 0 0 6.414 14 H 15 A 0.5 0.5 0 1 0 15 13 H 6.414 A 0.6 0.6 0 0 1 6.414 11 H 14 A 1 1 0 0 0 14.894 10.447 L 17.894 4.447 A 1 1 0 0 0 17 3 H 5.3 A 1 1 0 0 0 4.3 2 H 4 Z M 13.5 17.5 A 1.5 1.5 0 1 0 13.5 14.5 A 1.5 1.5 0 0 0 13.5 17.5 Z M 6.5 17.5 A 1.5 1.5 0 1 0 6.5 14.5 A 1.5 1.5 0 0 0 6.5 17.5 Z' />
					</Image>
				</Box>
			) : (
				<BoxEnd>
					<Image
						xmlns='http://www.w3.org/2000/svg'
						className='h-5 w-5'
						viewBox='0 0 20 20'
						fill={`${colors.green}`}
					>
						<path d='M 3 2 A 0.5 0.5 0 1 0 3 3 H 4.22 L 4.525 4.222 A 0.997 0.997 0 0 0 4.535 4.264 L 5.893 10 A 1 1 0 0 0 6.414 14 H 15 A 0.5 0.5 0 1 0 15 13 H 6.414 A 0.6 0.6 0 0 1 6.414 11 H 14 A 1 1 0 0 0 14.894 10.447 L 17.894 4.447 A 1 1 0 0 0 17 3 H 5.3 A 1 1 0 0 0 4.3 2 H 4 Z M 13.5 17.5 A 1.5 1.5 0 1 0 13.5 14.5 A 1.5 1.5 0 0 0 13.5 17.5 Z M 6.5 17.5 A 1.5 1.5 0 1 0 6.5 14.5 A 1.5 1.5 0 0 0 6.5 17.5 Z M 5.5 4 L 16.9 4 L 13.9 10 L 6.9 10' />
					</Image>
				</BoxEnd>
			)}
		</Link>
	);
};

export default CartIcon;
