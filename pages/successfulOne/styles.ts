import Styled from "styled-components";

export const Section = Styled.section`
	background-color: ${(props) => props.theme.colors.green};
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Text = Styled.span`
	font-size: 20px;
	color: ${(props) => props.theme.colors.white};
`;

export const BoxButton = Styled.div`
	bottom: 90px;
	position: fixed;
`;
