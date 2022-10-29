function problem6(forms) {
	//닉네임 중복 체크를 하는 함수 -> checkDuplicate
	//중복된 닉네임의 인덱스를 체크하는 함수 -> getIndex
	//중복 확인된 닉네임의 인덱스 값을 이용해 결과를 리턴하는 함수 -> checkNickname
	return checkNickname(forms);
}

function checkNickname(forms) {
	const nicknameOnly = forms.map((el) => el[1]);
	const duplicateIndex = getIndex(nicknameOnly);

	return forms
		.map((el, idx) => {
			if (duplicateIndex.includes(idx)) return el[0];
		})
		.sort((a, b) => (a > b ? 1 : -1));
}

function getIndex() {}

function checkDuplicate() {}

module.exports = problem6;
