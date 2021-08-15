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
	margin: 1.1rem auto 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    background-color: ${props => props.theme.colors.white};
    border-radius: 1rem;

    &:last-child {
        margin-bottom: 8rem;
    }
`;

export const FinishCard = styled.div`
    padding: 0 1rem;
	max-width: 800px;
	width: 100%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    border-top: 1px solid ${props => props.theme.colors.darkGray};

    &:first-child {
        border-top: 0;
    }

    .total {
        width: 100%;
		display: flex;
        flex-direction: row;
		align-items: center;
		justify-content: space-between;
        font-size: 1rem;
        font-weight: 600;
        padding: 0 1rem;

        .info {
            font-weight: 400;
        }
	}
`;

export const Message = styled.span`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${props => props.theme.colors.green};
	margin-top: 1.5rem;
    margin-bottom: 8rem;
`;

