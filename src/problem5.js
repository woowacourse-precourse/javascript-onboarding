const UnitMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

function problem5(money) {
	let answer = [];

	UnitMoney.map(UnitMoney => {
		answer.push(Math.floor(money / UnitMoney));
		money = money % UnitMoney;
	});

	return answer;
}

module.exports = problem5;
