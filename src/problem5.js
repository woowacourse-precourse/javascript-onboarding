function problem5(money) {
	//각 금액의 갯수를 반복해서 구한 후 결과 값을 반환할 함수 -> solution
	//각 액수의 갯수를 구할 함수 -> getCount
	return solution(money);
}

function solution(money) {
	const amounts = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
	let wallet = [];
	let count = 0;

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
