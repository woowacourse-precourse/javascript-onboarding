function countClapNums(num) {
	const clapNums = [3, 6, 9];
	let count = 0;
	num = num + "";

	num.split("").forEach(el => {
		if (clapNums.includes(Number(el))) return count++;
	});
	return count;
}

function problem3(num) {
	let answer = 0;

	for (let i = 0; i <= num; i++) {
		answer += countClapNums(i);
	}
	return answer;
}

module.exports = problem3;
