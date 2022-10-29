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

  const duplicates = Object.entries(duplicateNicknames).filter(
    ([key, value]) => value >= 2,
  );

  return answer;
}

problem6([
  ['jm@email.com', '제이엠'],
  ['jason@email.com', '제이슨'],
  ['woniee@email.com', '워니'],
  ['mj@email.com', '엠제이'],
  ['nowm@email.com', '이제엠'],
]);

module.exports = problem6;
