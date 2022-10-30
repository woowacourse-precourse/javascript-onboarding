function problem6(forms) {
	let answer = [];
	let arr = [];

	forms.map(el => {
		const [_, nickName] = el;

		for (let i = 0; i < nickName.length - 1; i++) {
			let temp = nickName.slice(i, i + 2);
			temp in arr ? arr[temp]++ : (arr[temp] = 1);
		}
	});

	forms.map(el => {
		const [email, nickName] = el;

		for (let i = 0; i < nickName.length - 1; i++) {
			let temp = nickName.slice(i, i + 2);

			if (arr[temp] > 1) answer.push(email);
		}
	});
	answer.sort();

	return answer;
}

module.exports = problem6;
