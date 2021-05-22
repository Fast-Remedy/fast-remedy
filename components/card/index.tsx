import React from "react";
import { BoxCard, Image } from "./styles";

interface Props {
	children: React.ReactNode;
	src: string;
}

const Card: React.FC<Props> = ({ children, src }) => (
	<BoxCard>
		<Image src={src} alt="drogaria moderna" width="100px" height="100px" />
		{children}
	</BoxCard>
);

export default Card;
