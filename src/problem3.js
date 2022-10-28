function problem3(number) {
	return clap(number);
}

function clap(number) {
	let sum = 0;

	for (let i = 1; i <= number; i++) {
		sum += countClap(i);
	}

	return sum;
}

function countClap(number) {
	let count = 0;

	number
		.toString()
		.split('')
		.forEach((el) => {
			count += [3, 6, 9].includes(Number(el)) ? 1 : 0;
		});

	return count;
}

module.exports = problem3;
