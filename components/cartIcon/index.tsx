import React from 'react';
import Link from 'next/link';
import { Image } from './styles';

const CartIcon = () => {
	return (
		<Link href='/cart'>
			<Image src='/images/icons/shopping-cart.png' alt='FastRemedy'></Image>
		</Link>
	);
};

export default CartIcon;
