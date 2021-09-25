import React from 'react';
import { Btn } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	color?: string;
	backgroundColor?: string;
	width?: string;
	height?: string;
	fontSize?: string;
}

const Button: React.FC<Props> = ({
	children,
	color,
	backgroundColor,
	width,
	height,
	fontSize,
	...props
}) => (
	<Btn
		{...props}
		color={color}
		backgroundColor={backgroundColor}
		width={width}
		height={height}
		fontSize={fontSize}
	>
		{children}
	</Btn>
);

export default Button;
