export const currentDate = () => {
	let date = new Date();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const year = date.getFullYear();
	const d = `${year}-${month}-${day}`;
	return d;
};
