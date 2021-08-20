import styled from 'styled-components';

export const Container = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Header = styled.header`
	width: 100%;
	height: 20vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.green};
	padding: 1rem;
`;

export const Section = styled.section`
	max-width: 800px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: space-between;
	justify-content: flex-start;
	gap: 1rem;
	padding: 1rem 2.5rem;

	.title {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.6rem;
	}
`;

export const LogoImage = styled.img`
	max-width: 300px;
	height: 100%;
`;

export const Message = styled.span`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${props => props.theme.colors.green};
	margin-top: 0.5rem;
`;
