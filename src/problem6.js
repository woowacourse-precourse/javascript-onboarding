function problem6(forms) {
  let emails = [];
  let words = [];

  // 연속 되는 단어들을 모아 배열에 담음
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length; j++) {
      let overlapNickname = forms[i][1][j] + forms[i][1][j + 1];
      if (forms[i][1][j + 1] !== undefined) {
        words.push(overlapNickname);
      }
    }
  }

  // 배열의 중복만 남도록 하는 함수
  function isOverlapChecking(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
  }

  // 중복 닉네임만 찾기
  const sameWord = isOverlapChecking(words);

  // 중복된 닉네임의 이메일 emails에 반환
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < sameWord.length; j++) {
      let checkName = forms[i][1].includes(sameWord[j]);
      if (checkName) {
        emails.push(forms[i][0]);
      }
    }
  }

  const result = isOverlapChecking(emails).sort();

  return result;
}

module.exports = problem6;
