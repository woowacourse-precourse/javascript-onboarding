const UnitMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
	let answer = [];

	for (let i = 0; i < UnitMoney.length; i++) {
		answer.push(Math.floor(money / UnitMoney[i]));
		money = money % UnitMoney[i];
	}

	return answer;
}

module.exports = problem5;
