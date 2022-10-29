function problem5(money) {
	return solution(money);
}

function solution(money) {
	amounts = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
	wallet = [];
	count = 0;

	amounts.forEach((amount) => {
		count = getCount(money, amount);
		wallet.push(count);
		money -= amount * count;
	});

	return wallet;
}

function getCount(money, amount) {
	return parseInt(money / amount);
}

module.exports = problem5;
