import React from 'react';
import ButtonsContainer from '../ButtonsContainer';
import Button from '../Button';
import {
	BoxCard,
	Line,
	Image,
	Text,
	Description,
	Price,
} from './styles';
import Theme from '../../pages/theme';

interface Props {
	description: string;
	src: string;
	store: string;
	price: number;
}

const ProductDetailsCard: React.FC<Props> = ({
	description,
	src,
	store,
	price,
}) => (
	<BoxCard>
		<Line>
			<Image src={src} alt={description} />
			<Text>
				<Description>{description}</Description>
				<Price>R$ {price.toString().replace('.', ',')}</Price>
			</Text>
		</Line>
	</BoxCard>
);

export default ProductDetailsCard;
