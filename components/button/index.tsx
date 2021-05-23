import React from "react";
import { Button } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	color?: string;
	bg?: string;
	width?: string;
	radius?: string;
	size?: string;
}

const ButtonsOne: React.FC<Props> = ({
	children,
	color,
	bg,
	width,
	radius,
	size,
	...props
}) => (
	<Button
		{...props}
		color={color}
		bg={bg}
		width={width}
		radius={radius}
		size={size}
	>
		{children}
	</Button>
);

export default ButtonsOne;
