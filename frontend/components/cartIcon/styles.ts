import styled from 'styled-components';

export const Image = styled.img`
	height: 2.5rem;
	width: 2.5rem;
    cursor: pointer;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.85);
    }
`;
