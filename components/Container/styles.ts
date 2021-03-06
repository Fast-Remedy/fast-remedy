import styled from 'styled-components';

export const ContainerBox = styled.main`
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	margin-top: 7rem;

	@media (max-width: 800px) {
		flex-direction: column-reverse;
		margin-top: 0;
	}
`;
