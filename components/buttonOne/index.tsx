import React from "react";
import { Button } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const ButtonsOne: React.FC<Props> = ({ children, ...props }) => (
	<Button {...props}>{children}</Button>
);

export default ButtonsOne;
