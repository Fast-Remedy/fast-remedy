import styled from 'styled-components';

interface Props {
	color?: string;
	backgroundColor?: string;
	width?: string;
	height?: string;
	fontSize?: string;
}

export const Btn = styled.button<Props>`
	border: 0;
	font-weight: 600;
	border-radius: 0.8rem;
	cursor: pointer;
	transition: filter 0.2s;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	background-color: ${props => props.backgroundColor || props.theme.colors.white};
	color: ${props => props.color || props.theme.colors.black};
	width: ${props => props.width || '8rem'};
	height: ${props => props.height || '3.5rem'};
	font-size: ${props => props.fontSize || '1rem'};
	font-weight: 500;
	overflow: hidden;
	transition: all 0.2s;

	&:hover,
	&:focus {
		filter: brightness(0.85);
		outline: none;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.info {
			font-weight: 400;
		}
	}

	@media (max-width: 800px) {
		&:hover,
		&:focus {
			filter: none;
		}
	}

	svg {
		width: 1.1rem;
		height: 1.1rem;
	}

	&.icon {
		gap: 0.2rem;

		img,
		svg {
			width: 1.5rem;
			height: 1.5rem;
		}
	}

	&.back {
		@media (max-width: 800px) {
			gap: 0.1rem;
		}
		@media (min-width: 801px) {
			img,
			svg {
				margin-bottom: 0.05rem;
			}
		}
	}

	&.right {
		gap: 0.6rem;
	}

	&.moreRight {
		gap: 1rem;
	}

	&.margin {
		img,
		svg {
			margin-bottom: 0.1rem;
		}
	}

	&.white {
		img,
		svg {
			filter: brightness(0) invert(1);
		}
	}

	&.disabled {
		opacity: 60%;
		cursor: not-allowed;

		&:hover,
		&:focus {
			filter: none;
		}
	}

	.spinner {
		animation: rotate 2s linear infinite;
		width: 50px;
		height: 50px;

		& .path {
			stroke: #fff;
			stroke-linecap: round;
			animation: dash 1.5s ease-in-out infinite;
		}
	}

	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}

	@keyframes dash {
		0% {
			stroke-dasharray: 1, 150;
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -35;
		}
		100% {
			stroke-dasharray: 90, 150;
			stroke-dashoffset: -124;
		}
	}
`;
