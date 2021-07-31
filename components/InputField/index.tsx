import React from 'react';
import { ContainerBox, InputBox, Label } from './styles';

interface Props {
	label: string;
    placeholder: string;
    required?: boolean | true;
}

const InputField: React.FC<Props> = ({ label, placeholder, required }) => {
	return (
		<ContainerBox>
            <Label>{label}</Label>
			<InputBox required={required} type='text' placeholder={placeholder} />
		</ContainerBox>
	);
};

export default InputField;
