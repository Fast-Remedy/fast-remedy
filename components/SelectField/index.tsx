import React, { ReactNode } from 'react';
import { ContainerBox, SelectBox, Label, Span } from './styles';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
	props?: React.SelectHTMLAttributes<HTMLSelectElement>;
	children: ReactNode;
	label: string;
	value: string;
	onChange(e: any): void;
}

const SelectField: React.FC<Props> = ({
	children,
	label,
	value,
	onChange,
	...props
}) => {
	return (
		<ContainerBox>
			<Label>{label}</Label>
			<SelectBox {...props} required value={value} onChange={onChange}>
				{children}
			</SelectBox>
			<Span>
				<svg
					className='w-6 h-6'
					fill='currentColor'
					viewBox='0 0 20 20'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						fillRule='evenodd'
						d='M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
						clipRule='evenodd'
					/>
				</svg>
			</Span>
		</ContainerBox>
	);
};

export default SelectField;
