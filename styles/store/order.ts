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

export const DetailsCard = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 1.1rem auto 0 auto;
	padding: 1rem 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.white};
	border-radius: 0.8rem;
	gap: 1rem;

	div {
		width: 100%;
	}
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
	border-radius: 0.8rem;

	&:last-child {
		margin-bottom: 8rem;
	}
`;

export const Text = styled.span`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 0.2rem;
`;

export const Customer = styled.span`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;

	img {
		border: 1px solid ${props => props.theme.colors.darkGray};
		border-radius: 50%;
		height: 3rem;
		width: 3rem;
	}
`;

export const Name = styled.span`
	font-size: 1.3rem;
	font-weight: 400;
	display: flex;
	gap: 0.5rem;
	overflow: hidden;
`;

export const Status = styled.span`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
	justify-content: flex-start;
	gap: 0.5rem;
	margin-top: 0.3rem;
`;

export const Description = styled.span`
	width: 100%;
	display: flex;
	flex-direction: column;
	font-size: 1rem;
	font-weight: 400;
	display: flex;
	gap: 0.2rem;
	overflow: hidden;
`;

export const Span = styled.span`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 0.3rem;

	svg {
		height: 1.5rem;
		width: 1.5rem;
	}

	&.pending-acceptance {
		color: ${props => props.theme.colors.yellow};
	}

	&.in-progress {
		color: ${props => props.theme.colors.black};
	}

	&.finished {
		color: ${props => props.theme.colors.green};
	}

	&.canceled {
		color: ${props => props.theme.colors.red};
	}
`;

export const Date = styled.span`
	display: flex;
	flex-direction: column;
	font-size: 0.9rem;
	font-weight: 400;
	margin-top: 0.5rem;
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

export const Info = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-weight: 600;
	text-align: center;

	.info {
		font-weight: 400;
	}
`;

export const CancelCard = styled.div`
	max-width: 800px;
	width: 100%;
	margin: 1.1rem auto 0 auto;
	padding: 2rem;
	gap: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.white};
	border-radius: 0.8rem;

	.buttons {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 2rem;
	}
`;

export const Message = styled.span`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	color: ${props => props.theme.colors.red};
	margin-top: 1.5rem;
`;
