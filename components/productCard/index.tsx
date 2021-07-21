import React from 'react';
import Link from 'next/link';
import Theme from '../../pages/theme';
import Button from '../../components/button';
import { BoxCard, Image, Text, Price } from './styles';

interface Props {
	productId?: string;
	description?: string;
	price?: number;
	src: string;
	alt?: string;
}

const ProductCard: React.FC<Props> = ({
	productId,
	description,
	price,
	src,
	alt,
}) => (
	<Link href={`/product/${productId}`}>
		<BoxCard>
			<Text>Dipirona Sódica 500mg Genérico Medley 10 Comprimidos</Text>
			<Price>R$ 6,50</Price>
			<Image src={src} alt={alt} />
			<div>
				<Button width='80px' color={Theme.colors.white} bg={Theme.colors.red}>
					Retirar
				</Button>
				<Button
					width='80px'
					color={Theme.colors.white}
					bg={Theme.colors.yellow}
				>
					Total: 4
				</Button>
			</div>
		</BoxCard>
	</Link>
);

export default ProductCard;
