export default function getBase64(element) {
	return new Promise((resolve, reject) => {
		const file = element[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}
