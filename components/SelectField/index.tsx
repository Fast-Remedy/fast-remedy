import React, { ReactNode } from 'react';
import { ContainerBox, SelectBox, Label, Span } from './styles';

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
    props?: React.SelectHTMLAttributes<HTMLSelectElement>;
	children: ReactNode;
	label: string;
	value: string;
	onChange(e: any): void;
}

const InputField: React.FC<Props> = ({ children, label, value, onChange, ...props }) => {
	return (
		<ContainerBox>
			<Label>{label}</Label>
			<SelectBox {...props} required value={value} onChange={onChange}>
				{children}
			</SelectBox>
            <Span>
                <img src="/images/icons/down-arrow.png" alt="Expandir opções" />
            </Span>
		</ContainerBox>
	);
};

export default InputField;
