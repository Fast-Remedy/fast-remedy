import styled from 'styled-components';

interface Props {
	width?: string;
    justify?: string;
}

export const ContainerBox = styled.div<Props>`
    width: ${props => props.width || '100%'};
	display: flex;
	flex-direction: row;
    align-items: center;
    justify-content: ${props => props.justify || 'space-between'};
    padding: 1rem 0;
`;
