import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';
import { BoxCard, Image, Text, Title, Category } from './styles';

interface Props {
	storeId: string;
	name: string;
	category: string;
	src: string;
}

const StoreCard: React.FC<Props> = ({ storeId, name, category, src }) => {
	return (
		<Link href={`/customer/stores/${storeId}`}>
			<BoxCard>
				<Image src={src} alt={name} />
				<Text>
					<Title>{name}</Title>
					<Category>{category}</Category>
				</Text>
				<FiChevronRight size={30} style={{ color: '#fff' }} />
			</BoxCard>
		</Link>
	);
};

export default StoreCard;
