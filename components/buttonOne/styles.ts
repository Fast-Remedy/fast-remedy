import Styled from "styled-components";

export const Button = Styled.button`
	border: 0;
	background-color: ${(props) => props.theme.background.blue};
	color: ${(props) => props.theme.color.white};
	padding: 10px;
	margin: 10px 0 0 0;
	border-radius: 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
