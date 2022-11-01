// 이메일 배열
function divideEmail(forms) {
  const emailArr = [...new Map(forms).keys()];
  return emailArr;
}

// 닉네임 배열
function divideNickname(forms) {
  const nickArr = [...new Map(forms).values()];
  return nickArr;
}

// 중복 확인 배열
function checkArray(forms) {
  const checkArr = new Array(forms.length).fill(false);
  return checkArr;
}

// 배열 중복 제거
function deleteOverlap(Arr) {
  Arr = [...new Set(Arr)];
  return Arr;
}

// 닉네임당 두 글자씩 나누기
function divideTwoWord(forms) {
  const nickname = divideNickname(forms);
  const twoWordArr = nickname.map(nickname => {
    let twoWordIndex = [];
    for(let i = 1; i < nickname.length; i++) {
      const twoWord = nickname[i - 1] + nickname[i];
      twoWordIndex.push(twoWord);
    }

    twoWordIndex = deleteOverlap(twoWordIndex);
    return twoWordIndex;
  })
  return twoWordArr;
}

// 닉네임당 비교해서 check배열 채우기
function compareNickname(twoWordArr, forms) {
  const checkArr = checkArray(forms);

	for (let i = 0; i < twoWordArr.length; i++) {
		for (let j = i + 1; j < twoWordArr.length; j++) {
			const combineArr = [...twoWordArr[i], ...twoWordArr[j]];
			const cleanArr = new Set(combineArr);

			if (combineArr.length !== cleanArr.size) {
				checkArr[i] = true;
				checkArr[j] = true;
			}
		}
	}

  return checkArr;
}

// check배열로 결과값 도출
function checkResult(emailArr, checkArr) {
  const overlapEmails = emailArr.filter((_, i) => checkArr[i]);
  return overlapEmails;
}

// 이메일 정렬
function sortResult(result) {
  const sortResult = result.sort((a, b) => a.localeCompare(b));
  return sortResult;
}

function problem6(forms) {
  const emailArr = divideEmail(forms);
  const checkArr = compareNickname(divideTwoWord(forms), forms);
  const result = checkResult(emailArr, checkArr);
  
  return sortResult(result);
}

module.exports = problem6;

// 기능들
// 1. 예외사항
// 2. 닉네임당 두 글자씩 나누기
// 3. 두글자씩 나눈 배열 만들기
// 4. 닉네임당 비교하기
// 5. 문자열과 비교할 check배열 만들기
// 6. check와 비교하여 결과도출