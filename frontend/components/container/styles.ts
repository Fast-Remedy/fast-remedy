import styled from 'styled-components';

export const ContainerBox = styled.main`
	display: flex;
	flex-direction: column;

	@media (max-width: 800px) {
		flex-direction: column-reverse;
	}
`;
