function problem6(forms) {
  var answer;
  const crew = [];
  const duplicateNicknames = {};

  for (const [email, nickname] of forms) {
    crew.push({ email: email, nickname: nickname });
    //2글자씩 자른 닉네임을 set에 넣음
    const splittedNicknames = new Set();
    for (let i = 0; i < nickname.length - 1; i++) {
      const slicedNickname = nickname.slice(i, i + 2);
      splittedNicknames.add(slicedNickname);
    }

    //set을 순회하면서 자른 닉네임이 몇 명이 겹치는지 카운트
    for (const splittedNickname of splittedNicknames) {
      if (!nickname.includes(splittedNickname)) continue;
      if (duplicateNicknames[splittedNickname]) {
        duplicateNicknames[splittedNickname] += 1;
      } else {
        duplicateNicknames[splittedNickname] = 1;
      }
    }
  }

  return answer;
}

module.exports = problem6;
