import React from "react";
import { BoxCard, Image } from "./styles";

interface Props {
	children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => (
	<BoxCard>
		<Image
			src="/images/logos/drogaria-moderna.png"
			alt="drogaria moderna"
			width="100px"
			height="100px"
		/>
		{children}
	</BoxCard>
);

export default Card;
