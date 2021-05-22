import React from "react";
import { Button } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
	color?: string;
	bg?: string;
}

const ButtonsOne: React.FC<Props> = ({ children, color, bg, ...props }) => (
	<Button {...props} color={color} bg={bg}>
		{children}
	</Button>
);

export default ButtonsOne;
