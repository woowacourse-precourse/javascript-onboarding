function problem5(money) {
	const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
	const wallet = createWallet(units);

	for (let unit of units) {
		money = getMoney(money, unit, wallet);
	}

	return convertWallet(wallet);
}

function createWallet(units) {
	const result = {};

	for (let money of units) {
		result[money] = 0;
	}
	return result;
}

function getMoney(money, unit, wallet) {
	wallet[unit] = Math.floor(money / unit);
	return money % unit;
}

function convertWallet(wallet) {
	return Object.keys(wallet)
		.sort((a, b) => Number(b) - Number(a))
		.map(unit => wallet[unit]);
}

module.exports = problem5;
