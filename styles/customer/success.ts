import Styled from 'styled-components';

export const Section = Styled.section`
	background-color: ${props => props.theme.colors.green};
	max-width: 800px;
	width: 100%;
	height: 100vh;
	padding: 1rem 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
    gap: 2rem;
    overflow: hidden;
`;

export const Text = Styled.span`
	font-size: 2rem;
	color: ${props => props.theme.colors.white};
    margin-bottom: 3rem;
`;
