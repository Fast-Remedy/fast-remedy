import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

import { BoxCard, Text, Title } from './styles';

interface Props {
	href: string;
	menu: string;
}

const ProfileCard: React.FC<Props> = ({ href, menu }) => {
	return (
		<Link href={`/${href}`}>
			<BoxCard>
				<Text>
					<Title>{menu}</Title>
				</Text>
				<FiChevronRight size={30} style={{ color: '#212121' }} />
			</BoxCard>
		</Link>
	);
};

export default ProfileCard;
