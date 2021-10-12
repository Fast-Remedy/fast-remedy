import Styled from 'styled-components';

export const Section = Styled.section`
	background-color: ${props => props.theme.colors.green};
	width: 100vw;
	height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    gap: 2rem;
    z-index: 1200;
`;

export const Text = Styled.span`
	font-size: 2rem;
	color: ${props => props.theme.colors.white};
    margin-bottom: 3rem;
    text-align: center;
    padding: 0 2rem 0 2rem;
`;
