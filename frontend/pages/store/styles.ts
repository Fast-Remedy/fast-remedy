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
	margin: 1.1rem auto 8rem auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    background-color: ${props => props.theme.colors.white};
    border-radius: 1rem;
`;
