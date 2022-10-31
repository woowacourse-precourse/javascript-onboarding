function problem6(forms) {
  const nicknameSet = new Set();
  const duplicationCountMap = new Map();
  let answer = [];

  // 1. 모든 닉네임을 중복의 가장 작은 단위로 자른 결과를 중복없이 담는다.
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j + 1 < forms[i][1].length; j++) {
      nicknameSet.add(forms[i][1].slice(j, j + 2));
    }
  }

  // 2. 쪼갠 글자들(key)과 쪼갠 글자가 포함된 닉네임의 메일(value)로 이루어진 Map 객체를 만든다.
  nicknameSet.forEach((item) => {
    forms.map((e) => {
      if (e[1].includes(item)) {
        if (duplicationCountMap.has(item)) {
          duplicationCountMap.set(item, [...duplicationCountMap.get(item), e[0]]);
        } else {
          duplicationCountMap.set(item, [e[0]]);
        }
      }
    })
  })

  // 3. 메일 개수(value)가 2개 이상인 경우 해당 메일들을 정답 배열에 넣는다. 
  duplicationCountMap.forEach((mail) => {
    if (mail.length > 1) answer.push(...mail);
  })

  // 4. 정답 배열을 중복 제거 후 오름차순으로 정렬한다.
  answer = [...new Set(answer)].sort();
  return answer;
}

module.exports = problem6;