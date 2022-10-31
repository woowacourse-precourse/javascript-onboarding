function problem6(forms) {
	let result = new Set();

	forms.sort((a, b) => a[1].length - b[1].length);

	for (let i = 0; i < forms.length; i++) {
		const [email, nickname] = forms[i];
		if (nickname.length === 1) continue;
		const list = getLetterCombinations(nickname);

		for (let letters of list) {
			for (let j = i + 1; j < forms.length; j++) {
				const [targetEmail, targetNickname] = forms[j];
				if (targetNickname.includes(letters)) {
					result.add(email);
					result.add(targetEmail);
					forms[j][1] = '1';
				}
			}
		}
	}

	return Array.from(result).sort();
}

function getLetterCombinations(nickname) {
	let result = [];

	let i = 2;
	while (i <= nickname.length) {
		for (let j = 0; j <= nickname.length - i; j++) {
			result.push(nickname.slice(j, j + i));
		}
		i++;
	}
	return result;
}

module.exports = problem6;
