import styled from 'styled-components';

interface Props {
	color?: string;
	backgroundColor?: string;
	width?: string;
	radius?: string;
	fontSize?: string;
}

export const Btn = styled.button<Props>`
	border: 0;
    font-weight: 600;
	padding: 1rem;
	border-radius: 1rem;
    cursor: pointer;
    transition: filter 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
	background-color: ${props => props.backgroundColor || props.theme.colors.white};
	color: ${props => props.color || props.theme.colors.black};
	width: ${props => props.width || '0px'};
	font-size: ${props => props.fontSize || '1rem'};

	&:hover{
		filter: brightness(0.85);
	}
`;
