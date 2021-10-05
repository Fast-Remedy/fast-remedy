import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

import { Button, BoxCard, Text, Title } from './styles';

interface Props {
	href: string;
	menu: string;
	onClick?: () => void;
}

const ProfileCard: React.FC<Props> = ({ href, menu, onClick }) => {
	return (
		<Button onClick={onClick}>
			<Link href={`/${href}`}>
				<BoxCard>
					<Text>
						<Title>{menu}</Title>
					</Text>
					<FiChevronRight size={30} style={{ color: '#212121' }} />
				</BoxCard>
			</Link>
		</Button>
	);
};

export default ProfileCard;
