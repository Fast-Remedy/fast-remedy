import Styled from "styled-components";

interface Props {
	margin?: string;
}

export const Nav = Styled.nav`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	background-color: ${(props) => props.theme.background.green};
`;

export const Image = Styled.img<Props>`
	margin: ${(props) => props.margin || "0 40px 0 0"} ;
	width: 40px;
	height: 60px;
`;
