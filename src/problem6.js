function problem6(forms) {
	let answer;
	let setAnswer = new Set();
	let dictObject = new Object();

	const checkEmailDomain = (form) => {
		if (
			form[0].includes('@email.com') &&
			11 <= form[0].length &&
			form[0].length < 20
		) {
			return true;
		}
		return false;
	};

	const checkNickname = (form) => {
		// 한글 체크 함수 구글링
		function checkKor(str) {
			const regExp = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
			return regExp.test(str) ? true : false;
		}

		function checkLength(str) {
			return 1 <= str.length && str.length < 20 ? true : false;
		}

		return checkKor(form[1]) && checkLength(form[1]) ? true : false;
	};

	// 닉네임 안에서 연속하는 문자열 두개 모두 찾기, 중복 안되게 set으로 저장하고 array로 변환
	const getSerialStr = (nickname) => {
		let result = new Set();
		for (let i = 1; i < nickname.length; i++) {
			result.add(nickname.charAt(i - 1) + nickname.charAt(i));
		}
		return [...result];
	};

	forms.forEach((form) => {
		if (checkEmailDomain(form) && checkNickname(form)) {
			const email = form[0];
			const nickname = form[1];

			const serialStr = getSerialStr(nickname);
			serialStr.forEach((str) => {
				// 이미 딕셔너리 안에 키가 있으면 있던 이메일과 지금 이메일 모두 setAnswer에 넣음. set이라 중복 신경 안써도 됨
				if (str in dictObject) {
					setAnswer.add(dictObject[str]);
					setAnswer.add(email);
				} else {
					// 키 없으면 딕셔너리에 지금 이메일만 넣어
					dictObject[str] = email;
				}
			});
		}
	});

	// set => array 로 바꿈
	answer = [...setAnswer];
	answer.sort();

	return answer;
}

module.exports = problem6;
