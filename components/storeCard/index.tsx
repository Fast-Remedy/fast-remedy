import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { BoxCard, Image, Text, Title, Category, Arrow } from './styles';

interface Props {
	storeId: string;
	name: string;
	category: string;
	src: string;
	alt: string;
}

const StoreCard: React.FC<Props> = ({ storeId, name, category, src, alt }) => (
	<BoxCard>
		<Image src={src} alt={alt} />
		<Text>
			<Title>{name}</Title>
			<Category>{category}</Category>
		</Text>
		<Link href={`/store/${storeId}`}>
			<Arrow>
				<FiChevronRight size={30} style={{ color: '#fff' }} />
			</Arrow>
		</Link>
	</BoxCard>
);

export default StoreCard;
