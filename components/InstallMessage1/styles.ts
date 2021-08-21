import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	width: 100vw;
	padding: 0 2.5rem 0 2.5rem;
	position: fixed;
	bottom: 0;
	z-index: 999;
`;

export const Alert = styled.div`
	background-color: ${props => props.theme.colors.white};
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 1rem;
	width: 100%;
    max-width: 400px;
	padding: 1rem;
	border-radius: 1rem;
    box-shadow: 0 20px 30px 15px rgba(0,0,0,0.2);
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
    height: 100%;
    margin: auto 0;

	svg {
        margin-left: 0.5rem;
		width: 2rem;
	}
`;

export const Close = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	position: relative;
    height: 100%;
    width: 1.5rem;

	svg {
		width: 1.8rem;
		position: absolute;
	}
`;

export const Text = styled.span`
	color: ${props => props.theme.colors.black};
	font-size: 0.9rem;
	display: flex;
	align-items: center;
	justify-content: flex-end;
    height: 1.8rem;

	@media (max-width: 400px) {
		font-size: 0.8rem;
	}

	@media (max-width: 350px) {
		font-size: 0.5rem;
	}
`;

export const Img = styled.img`
	width: 1rem;
	margin: 0 0.5rem 0.2rem 0.5rem;
`;

export const Arrow = styled.div`
	border-top: 20px solid ${props => props.theme.colors.white};
	border-left: 20px solid transparent;
	border-right: 20px solid transparent;
	border-bottom: 20px solid transparent;
	/* background-color: ${props => props.theme.colors.white}; */
`;
