import React from 'react';
import { ContainerBox, Input, Label } from './styles';
import Theme from '../../styles/theme';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
	props?: React.InputHTMLAttributes<HTMLInputElement>;
	label: string;
	isIncorrect?: boolean | false;
}

const CurrencyField: React.FC<Props> = ({ label, isIncorrect, ...props }) => {
	return (
		<ContainerBox>
			<Label>
				{label}
				{isIncorrect && (
					<svg
						fill={Theme.colors.red}
						viewBox='0 0 20 20'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fillRule='evenodd'
							d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
							clipRule='evenodd'
						/>
					</svg>
				)}
			</Label>
			<Input
				decimalSeparator=','
				decimalScale={2}
				fixedDecimalScale={true}
				allowNegative={false}
				prefix='R$ '
				{...props}
				className={isIncorrect && 'incorrect'}
			/>
		</ContainerBox>
	);
};

export default CurrencyField;
