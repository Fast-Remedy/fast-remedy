/* eslint-disable no-plusplus */
export const validateCpf = cpf => {
	const convertedCpf = cpf.replace(/[^\d]+/g, '');

	let sum = 0;
	let rest = 0;
	sum = 0;
	if (convertedCpf == '00000000000') {
		return false;
	}

	for (let i = 1; i <= 9; i++) {
		sum = sum + parseInt(convertedCpf.substring(i - 1, i)) * (11 - i);
	}
	rest = (sum * 10) % 11;

	if (rest == 10 || rest == 11) rest = 0;
	if (rest != parseInt(convertedCpf.substring(9, 10))) {
		return false;
	}

	sum = 0;
	for (let i = 1; i <= 10; i++) {
		sum = sum + parseInt(convertedCpf.substring(i - 1, i)) * (12 - i);
	}
	rest = (sum * 10) % 11;

	if (rest == 10 || rest == 11) rest = 0;
	if (rest != parseInt(convertedCpf.substring(10, 11))) {
		return false;
	}
	return true;
};

export const validateCnpj = (cnpj: string): boolean => {
	const convertedCnpj = cnpj.replace(/[^\d]+/g, '');

	if (convertedCnpj === '') return false;

	if (convertedCnpj.length !== 14) return false;

	if (
		convertedCnpj === '00000000000000' ||
		convertedCnpj === '11111111111111' ||
		convertedCnpj === '22222222222222' ||
		convertedCnpj === '33333333333333' ||
		convertedCnpj === '44444444444444' ||
		convertedCnpj === '55555555555555' ||
		convertedCnpj === '66666666666666' ||
		convertedCnpj === '77777777777777' ||
		convertedCnpj === '88888888888888' ||
		convertedCnpj === '99999999999999'
	)
		return false;

	let length = convertedCnpj.length - 2;
	let numbers = convertedCnpj.substring(0, length);
	const digits = convertedCnpj.substring(length);
	let sum = 0;
	let pos = length - 7;
	for (let i = length; i >= 1; i--) {
		sum += Number(numbers.charAt(length - i)) * pos--;
		if (pos < 2) pos = 9;
	}
	let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
	if (result !== Number(digits.charAt(0))) {
		return false;
	}

	length += 1;
	numbers = convertedCnpj.substring(0, length);
	sum = 0;
	pos = length - 7;
	for (let i = length; i >= 1; i--) {
		sum += Number(numbers.charAt(length - i)) * pos--;
		if (pos < 2) pos = 9;
	}
	result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
	if (result !== Number(digits.charAt(1))) {
		return false;
	}

	return true;
};
