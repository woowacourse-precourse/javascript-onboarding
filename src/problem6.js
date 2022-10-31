function problem6(forms) {
  let answer = [];
  let nickname;

  // 중복 문자를 key로, 중복 횟수를 value로 하는 객체 생성
  let duplicatedList = forms
    .map((el) => el[1])
    .reduce((acc, cur) => {
      for (let i = 0; i < cur.length - 1; i++) {
        nickname = cur.substr(i, 2);
        acc[nickname] ? (acc[nickname] += 1) : (acc[nickname] = 1);
      }
      return acc;
    }, {});

  // duplicatedList 객체를 탐색하며
  for (let key in duplicatedList) {
    // 각 크루의 닉네임, 이메일에 대하여
    for (let i = 0; i < forms.length; i++) {
      // 중복 횟수 > 1을 만족하고 크루의 닉네임이 중복 문자를 포함 한다면
      if (duplicatedList[key] > 1 && forms[i][1].includes(key)) {
        // answer 배열에 크루의 이메일을 push()
        answer.push(forms[i][0]);
      }
    }
  }

  // 중복 제거 및 오름차순 정렬하여 결과값 산출
  return [...new Set(answer)].sort();
}

module.exports = problem6;
