function problem5(money) {
	let answer = [];
	let sortMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

	for (let i = 0; i < sortMoney.length; i++) {
		if (i === 0) {
			answer.push(Math.floor(money / sortMoney[i]));
		} else {
			answer.push(Math.floor((money % sortMoney[i - 1]) / sortMoney[i]));
		}
	}
	return answer;
}

module.exports = problem5;
