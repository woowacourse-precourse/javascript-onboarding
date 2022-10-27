function problem6(forms) {
  let answer;

  addDuplicateFlag(forms);
  checkSimilarNickname(forms);
  answer = getEmailWithSimilarNickname(forms);
  console.log(answer);
  return answer;
}

function addDuplicateFlag(forms) {
  forms.forEach((form) => form.push(false));
}

function checkSimilarNickname(forms) {
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][2] === true) continue;
    const twoCharCaseArr = splitTwoChar(forms[i][1]);
    checkIncludeTwoCharCase(i, twoCharCaseArr, forms);
  }
}

function checkIncludeTwoCharCase(startIdx, twoCharCaseArr, forms) {
  for (const twoChar of twoCharCaseArr) {
    checkIncludeTwoChar(startIdx, twoChar, forms);
  }
}

function checkIncludeTwoChar(startIdx, twoChar, forms) {
  for (let i = startIdx + 1; i < forms.length; i++) {
    if (forms[i][2] === true) continue;
    if (forms[i][1].includes(twoChar)) {
      forms[startIdx][2] = true;
      forms[i][2] = true;
    }
  }
}

function splitTwoChar(nickname) {
  const result = [];

  for (let i = 0; i < nickname.length - 1; i++) {
    result.push(nickname[i] + nickname[i + 1]);
  }
  return result;
}

function getEmailWithSimilarNickname(forms) {
  let result;

  result = [];
  for (const [email, nickname, isDuplicate] of forms) {
    if (isDuplicate) result.push(email);
  }
  result.sort();
  return result;
}

module.exports = problem6;

/*
6. 문제 6
  1. forms 배열 순회
    1. 각 요소의 이름을 두 글자 단위로 케이스를 나눈다. ('제이엠' -> '제이', '이엠')
    2. 케이스 반복
      1. forms 배열 순회 
        1. 케이스를 포함하는 이름이 있는지 찾는다.
        2. 중복되는 경우
          1. 해당 이메일을 배열에 저장한다.
          2. 체크해서, 다음에 또 검사하지 않도록 방지한다.
*/
