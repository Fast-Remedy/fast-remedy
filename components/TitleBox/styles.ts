import styled from 'styled-components';

interface Props {
	fontSize?: string;
}

export const ContainerBox = styled.span`
    max-width: 800px;
    width: 100%;
    display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;

export const Title = styled.span<Props>`
	color: ${props => props.theme.colors.black};
	font-size: ${props => props.fontSize || '3rem'};
	font-weight: 400;
    line-height: 3.5rem;
`;
