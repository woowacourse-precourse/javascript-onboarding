function problem5(money) {
	var answer;
	count = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

	for (let i = 0; i < count.length; i++) {
		while (money >= unit[i]) {
			money -= unit[i];
			count[i] += 1;
		}
	}
	return count;
}
module.exports = problem5;
