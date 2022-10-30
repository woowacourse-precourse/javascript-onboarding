function problem6(forms) {
  var answer;
  const overlaps = new Map();
  let resultArr = [];

  // 문자열을 2단어씩 쪼개 Map 객체에 넣음
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const twoLetters = forms[i][1][j] + forms[i][1][j + 1];
      if (!overlaps.has(twoLetters)) {
        overlaps.set(twoLetters, 1);
      } else {
        overlaps.set(twoLetters, overlaps.get(twoLetters) + 1);
      }
    }
  }

  //Map 객체에서 값이 2이 이상인 중복된 단어가 포함되어 있는 닉네임의 이메일을 resultArr에 추가
  for (const overlapLetter of overlaps) {
    if (overlapLetter[1] > 1) {
      for (const form of forms) {
        if (form[1].includes(overlapLetter[0])) {
          resultArr.push(form[0]);
        }
      }
    }
  }

  //문자열 정렬
  resultArr.sort();
  //이메일 중복 처리
  resultArr = Array.from(new Set(resultArr));

  answer = resultArr;
  return answer;
}

module.exports = problem6;
