import Styled from "styled-components";

interface Props {
	color?: string;
	bg?: string;
}

export const Button = Styled.button<Props>`
	border: 0;
	background-color: ${(props) => props.bg || props.theme.colors.white};
	color: ${(props) => props.color || props.theme.colors.black};
	font-weight: 700;
	padding: 10px;
	margin: 10px 10px 0 10px;
	border-radius: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	&:hover{
		opacity: 0.8;
	}
`;
