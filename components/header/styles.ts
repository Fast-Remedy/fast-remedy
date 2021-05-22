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
	background-color: ${(props) => props.theme.colors.green};
	padding: 5px 0;
`;

export const Image = Styled.img`
	width: 30px;
	height: 40px;
`;

export const Text = Styled.span`
	color: ${(props) => props.theme.colors.white};
	font-size: 12px;

`;

export const Picture = Styled.picture<Props>`
	margin: ${(props) => props.margin || "0 100px 0 0"} ;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&:hover{
		opacity: 0.8;
	}
`;
