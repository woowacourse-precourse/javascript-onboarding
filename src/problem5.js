function problem5(money) {
	let answer;
	let balane = money;
	const moneyType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

	answer = moneyType.map((item) => {
		const share = parseInt(balane / item);
		balane = balane % item;
		return share;
	});

	return answer;
}

module.exports = problem5;
