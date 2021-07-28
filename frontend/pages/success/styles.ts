import Styled from 'styled-components';

export const Section = Styled.section`
	background-color: ${props => props.theme.colors.green};
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Text = Styled.span`
	font-size: 2rem;
	color: ${props => props.theme.colors.white};
    margin-bottom: 3rem;
`;
