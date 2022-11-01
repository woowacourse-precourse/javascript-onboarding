function problem6(forms) {
  let answer = [];
  //각 이메일과 닉네임을 대응해서 저장하는 map
  let mapMatch = new Map();
  //중복되는 닉네임을 체크하는 용도의 map
  let checkNickName = new Map();

  for ([a, b] of forms) {
    mapMatch.set(b, a);
  }

  for ([a, b] of forms) {
    for (let i = 0; i < b.length - 1; i++) {
      const nickName = b.substr(i, 2);
      if (checkNickName.has(nickName)) {
        checkNickName.set(nickName, checkNickName.get(nickName) + 1);
      } else {
        checkNickName.set(nickName, 1);
      }
    }
  }

  //중복된 문제의 이름을 victim 배열에 push한다!
  const result = [...checkNickName];
  let Victim = [];
  for (checkRepeat of result) {
    if (checkRepeat[1] > 1) {
      Victim.push(checkRepeat[0]);
    }
  }

  for (let name of Victim) {
    for ([a, b] of forms) {
      if (b.includes(name)) {
        answer.push(mapMatch.get(b));
      }
    }
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
