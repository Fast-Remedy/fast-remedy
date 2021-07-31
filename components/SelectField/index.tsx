import React, { ReactNode } from 'react';
import { ContainerBox, SelectBox, Label, Span } from './styles';

interface Props {
	children: ReactNode;
	label: string;
	value: string;
	onChange(e: any): void;
}

const InputField: React.FC<Props> = ({ children, label, value, onChange }) => {
	return (
		<ContainerBox>
			<Label>{label}</Label>
			<SelectBox required value={value} onChange={onChange}>
				{children}
			</SelectBox>
            <Span>
                <img src="/images/icons/down-arrow.png" alt="Expandir opções" />
            </Span>
		</ContainerBox>
	);
};

export default InputField;
