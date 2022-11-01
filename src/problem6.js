function problem6(forms) {
	var answer = [];

	for (arr of forms) {
		for (let i = 0; i < arr.length; i++) {
			let word = arr[1][i] + arr[1][i + 1];

			for (form of forms) {
				if (
					form[1].includes(word) &&
					forms.indexOf(arr) !== forms.indexOf(form) &&
					!answer.includes(arr[0])
				)
					answer.push(arr[0]);
			}
		}
	}
	answer.sort((a, b) => a.localeCompare(b));
	return answer;
}

module.exports = problem6;
