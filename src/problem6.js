function problem6(forms) {
  const nicknameSet = new Set();
  let answer = [];

  // 1. 모든 닉네임을 중복의 가장 작은 단위로 자른 결과를 중복없이 담는다.
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j + 1 < forms[i][1].length; j++) {
      nicknameSet.add(forms[i][1].slice(j, j + 2));
    }
  }

  return answer;
}

module.exports = problem6;