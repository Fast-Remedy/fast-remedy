import React from "react";
import { Button } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	color?: string;
	bg?: string;
	width?: string;
}

const ButtonsOne: React.FC<Props> = ({ children, color, bg, width, ...props }) => (
	<Button {...props} color={color} bg={bg} width={width}>
		{children}
	</Button>
);

export default ButtonsOne;
