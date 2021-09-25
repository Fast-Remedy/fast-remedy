import React, { ReactNode } from 'react';
import { ReactElement } from 'react';
import { ContainerBox } from './styles';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	props?: React.HTMLAttributes<HTMLDivElement>;
	children: ReactElement;
	width?: string;
	justify?: string;
}

const ButtonsContainer = ({ children, width, justify, ...props }: ContainerProps) => {
	return (
		<ContainerBox {...props} width={width} justify={justify}>
			{children}
		</ContainerBox>
	);
};

export default ButtonsContainer;
