import React from 'react';
import { ContainerBox, InputBox } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	props?: React.InputHTMLAttributes<HTMLInputElement>;
}

const SearchField: React.FC<Props> = ({ ...props }) => {
	return (
		<ContainerBox>
			<InputBox {...props} type='text' placeholder='Digite algo aqui...' />
		</ContainerBox>
	);
};

export default SearchField;
