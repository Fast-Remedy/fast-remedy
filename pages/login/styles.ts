import Styled from "styled-components";

interface Props {
	radius?: string;
	margin?: string;
}

export const Section = Styled.section`
	background-color: ${(props) => props.theme.colors.green};
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Form = Styled.form`
	background-color: ${(props) => props.theme.colors.white};
	width: 330px;
	padding: 30px;
`;

export const BoxText = Styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin: 0 0 30px 0;
`;

export const Title = Styled.span`
	font-size: 30px;
	color: ${props => props.theme.colors.black};
	font-weight: 700;
`;


export const Text = Styled.a`
	font-size: 18px;
	color: ${props => props.theme.colors.black};
	&:hover{
		opacity: 0.8;
	}
`;

export const Input = Styled.input<Props>`
	width: 260px;
	background-color: ${props => props.theme.colors.gray};
	border-color: ${props => props.theme.colors.black};
	border-radius: ${props => props.radius || '10px'};
	padding: 5px;
	margin: ${props => props.margin};
	outline: none;
`;

export const BoxText2 = Styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	margin: 30px 0 30px 0;
`;
