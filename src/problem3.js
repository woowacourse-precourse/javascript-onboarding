function problem3(number) {
	let answer;

	const useFor = (number) => {
		let result = 0;
		for (let i = 1; i <= number; i++) {
			const clapNum = i
				.toString()
				.split('')
				.map((item) => parseInt(item))
				.filter((item) => item === 3 || item === 6 || item === 9).length;

			result += clapNum;
		}
		return result;
	};

	answer = useFor(number);

	return answer;
}

module.exports = problem3;
