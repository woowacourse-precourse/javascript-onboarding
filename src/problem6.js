function problem6(forms) {
	//서로 중복된 단어가 있는지 비교하는 함수 -> compareWords
	//닉네임 중복 체크를 하는 함수 -> checkDuplicate
	//중복된 닉네임의 인덱스를 체크하는 함수 -> getIndex
	//중복 확인된 닉네임의 인덱스 값을 이용해 결과를 리턴하는 함수 -> solution
	return solution(forms);
}

function solution(forms) {
	const nicknameOnly = forms.map((form) => form[1]);
	const duplicateIndex = getIndex(nicknameOnly);

	return forms
		.map((form, idx) => {
			if (duplicateIndex.includes(idx)) return form[0];
		})
		.sort((a, b) => (a > b ? 1 : -1));
}

function getIndex(nicknames) {
	let index = [];

	nicknames.forEach((nickname, idx) => {
		if (checkDuplicate(nickname, nicknames)) index.push(idx);
	});

	return index;
}

function checkDuplicate(selected, nicknames) {
	const words = selected.split('');
	let result = [];

	result = nicknames.filter((nickname) => compareWords(words, nickname));

	return result.length > 1 ? true : false;
}

function compareWords(words, nickname) {
	let count = 0;

	for (let i = 0; i < words.length - 1; i++) {
		count += nickname.includes(words[i] + words[i + 1]) ? 1 : 0;
	}

	return count > 0 ? true : false;
}

module.exports = problem6;
