import styled from 'styled-components';

export const ContainerBox = styled.span`
	max-width: 800px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
    position: relative;
`;

export const Label = styled.label`
	width: 100%;
	color: ${props => props.theme.colors.black};
	font-size: 1rem;
	font-weight: 400;
	padding: 1rem;
	outline: 0;
	text-align: start;
	font-size: 0.85rem;
	font-weight: 600;

	&:focus {
		border: 1.5px solid ${props => props.theme.colors.green};
	}
`;


export const SelectBox = styled.select`
	width: 100%;
	background-color: ${props => props.theme.colors.white};
	color: ${props => props.theme.colors.black};
	font-size: 1rem;
	font-weight: 400;
	border: 1.5px solid ${props => props.theme.colors.white};
	border-radius: 1rem;
	padding: 1rem;
	outline: 0;
	-webkit-appearance: none;

	&:focus {
		border: 1.5px solid ${props => props.theme.colors.green};
	}

    &:disabled {
        filter: brightness(0.85);
        cursor: not-allowed;
    }
`;

export const Span = styled.span`
    position: absolute;
    top: 4.3rem;
    right: 1rem;

    svg {
        height: 1.3rem;
        width: 1.3rem;
    }
`;
