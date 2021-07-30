import React from 'react';
import { ContainerBox, Title } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	title: string;
    fontSize?: string;
}

const TitleBox: React.FC<Props> = ({ title, fontSize }) => {
	return (
		<ContainerBox>
			<Title fontSize={fontSize}>{title}</Title>
		</ContainerBox>
	);
};

export default TitleBox;
