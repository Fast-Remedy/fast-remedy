import Styled from "styled-components";

export const Alert = Styled.div`
	margin: auto;
	background-color: ${(props) => props.theme.colors.white};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 300px;
	padding: 15px;
	border-radius: 10px;
`;

export const Section = Styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.theme.colors.blackRGBA};
	position: absolute;
	z-index: 9;
`;

export const Text = Styled.span`
	color: ${(props) => props.theme.colors.black};
	font-weight: 700;
	font-size: 20px;
`;

export const Input = Styled.input`
	background-color: ${(props) => props.theme.colors.gray};
	color: ${(props) => props.theme.colors.black};
	font-weight: 700;
	padding: 5px;
	width: 170px;
	height: 35px;
	border: solid 1px ${(props) => props.theme.colors.black};
	font-size: 20px;
	margin: 0 -10px;
	outline: none;
`;

export const BoxCount = Styled.div`
	margin: 15px 0;

`;
