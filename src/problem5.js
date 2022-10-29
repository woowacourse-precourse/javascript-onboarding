function problem5(money) {
	//결과 값을 구하고 반환할 함수 -> solution
	//각 액수의 갯수를 구할 함수 -> getCount
	return solution(money);
}

function solution(money) {
	amounts = [50000, 10000, 5000, 1000, 500, 100, 10, 1];
	wallet = [];
	count = 0;

	amounts.forEach((amount) => {
		count = getCount(money, amount);
		wallet.push(count);
		money -= amount * count;
	});
}

function getCount(money, amount) {}

module.exports = problem5;
