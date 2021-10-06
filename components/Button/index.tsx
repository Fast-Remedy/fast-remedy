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
	isLoading?: boolean;
}

const Button: React.FC<Props> = ({
	children,
	color,
	backgroundColor,
	width,
	height,
	fontSize,
	isLoading,
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
		{isLoading && (
			<svg className='spinner' viewBox='0 0 50 50'>
				<circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='5' />
			</svg>
		)}
		{children}
	</Btn>
);

export default Button;
