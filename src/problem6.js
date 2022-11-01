function problem6(forms) {
  var answer;
  // 두 글자씩 twoLetters에 담음
  let twoLetters = [];
  // 중복되는 닉네임을 가진 크루의 email 저장
  const resultArr = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      twoLetters.push(forms[i][1].substr(j, j + 2));
    }
  }

  return answer;
}

module.exports = problem6;
