import styled from 'styled-components';

export const Section = styled.section`
	background-color: ${props => props.theme.colors.green};
	width: 100vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	padding: 4rem 2rem 4rem 2rem;

	.separator {
		font-size: 1.2rem;
		font-weight: 500;
		color: ${props => props.theme.colors.white};
	}
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 2rem;
`;

export const LogoImage = styled.img`
	max-width: 300px;
	height: 8rem;
`;

export const TitleBox = styled.h1`
	color: ${props => props.theme.colors.white};
	font-size: 5rem;
	font-weight: 600;
	border-left: 1px solid ${props => props.theme.colors.white};
	padding-left: 2rem;
`;

export const TextBox = styled.h1`
	color: ${props => props.theme.colors.white};
	font-size: 1.3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	width: 22rem;
`;
