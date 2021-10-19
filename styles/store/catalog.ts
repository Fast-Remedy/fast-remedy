import styled from 'styled-components';

export const Section = styled.section`
	max-width: 800px;
	width: 100%;
	padding: 1rem 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;

export const BoxCard = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 0 auto 8rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.white};
	border-radius: 0.8rem;
`;

export const Message = styled.span`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${props => props.theme.colors.green};
	margin-top: 1.5rem;
`;

export const IncorrectMessage = styled.span`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${props => props.theme.colors.red};
	margin-top: 1.5rem;
`;

export const Image = styled.img`
	margin-top: 1.7rem;
	width: 6rem;
	height: 6rem;
	object-fit: contain;
	border-radius: 0.8rem;
	background-color: ${props => props.theme.colors.white};
`;

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;
