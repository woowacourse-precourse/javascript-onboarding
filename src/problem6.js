function problem6(forms) {
  console.log(divideEmail(forms));
  console.log(divideNickname(forms));
}

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
  console.log(twoWordArr);
  return twoWordArr;
}

// 닉네임당 비교하기
function compareNickname(twoWordArr, emailArr) {
	for (let i = 0; i < twoWordArr.length; i++) {
		for (let j = i + 1; j < twoWordArr.length; j++) {
			const combineArr = [...twoWordArr[i], ...twoWordArr[j]];
      console.log(combineArr);
			const arrangeArr = new Set(combineArr);

			if (combineArr.length !== arrangeArr.size) {
				arrangeArr[i] = true;
				arrangeArr[j] = true;
			}
		}
	}
  const overlapEmails = emailArr.filter((_, i) => arrangeArr[i]);
  return overlapEmails;
}

divideTwoWord([["jm@email.com", "제이엠"], ["jason@email.com", "제이슨"], ["woniee@email.com", "워니"], ["mj@email.com", "엠제이"], ["nowm@email.com", "이제엠"]]);

module.exports = problem6;

// 기능들
// 1. 예외사항
// 2. 닉네임당 두 글자씩 나누기
// 3. 두글자씩 나눈 배열 만들기
// 4. 닉네임당 비교하기