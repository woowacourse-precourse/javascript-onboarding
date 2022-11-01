function problem5(money) {
	const bank = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
	let answer = [];
	bank.forEach((element) => {
		let quotient = parseInt(money / element);
		answer.push(quotient);
		money -= quotient * element;
	});

	return answer;
}

module.exports = problem5;
