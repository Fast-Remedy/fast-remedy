import styled from 'styled-components';

export const Section = styled.section`
	max-width: 800px;
    padding: 1rem 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;

export const TitleBox = styled.span`
    max-width: 800px;
    width: 100%;
    display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const Title = styled.span`
	color: ${props => props.theme.colors.black};
	font-size: 3rem;
	font-weight: 400;
`;

export const BoxCard = styled.div`
    max-width: 800px;
    width: 100%;
	margin: 1.1rem auto 8rem auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

	@media (max-width: 800px) {
		display: flex;
		flex-direction: column;
        align-items: center;
        justify-content: center;
	}
`;
