import React from 'react';
import { ContainerBox, InputBox, Label } from './styles';

interface Props {
    type?: string | 'text';
    required?: boolean | true;
	label: string;
    placeholder: string;
}

const InputField: React.FC<Props> = ({ type, required, label, placeholder}) => {
	return (
		<ContainerBox>
            <Label>{label}</Label>
			<InputBox type={type} required={required} placeholder={placeholder} />
		</ContainerBox>
	);
};

export default InputField;
