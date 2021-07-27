import styled from 'styled-components';

export const Section = styled.section`
	background-color: ${props => props.theme.colors.green};
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    gap: 3rem;
`;

export const LogoImage = styled.img`
	max-width: 300px;
	height: 15rem;
`;
