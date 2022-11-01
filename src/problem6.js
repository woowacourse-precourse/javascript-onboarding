function problem6(forms) {
  var answer;
  const crew = [];
  const duplicateNicknames = {};

  for (const [email, nickname] of forms) {
    crew.push({ email: email, nickname: nickname });
    //2글자씩 자른 닉네임을 set에 넣음
    //제이제이엠과 같이 자른 닉네임이 중복될 수 있으므로 set 사용
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

  //2명 이상 겹친 닉네임들
  const duplicates = Object.entries(duplicateNicknames).filter(
    ([key, value]) => value >= 2,
  );

  const result = new Set();

  //다른 크루와 닉네임이 겹친 크루의 닉네임 추가
  for (const person of crew) {
    for (const [duplicate, _] of duplicates) {
      if (!person.nickname.includes(duplicate)) continue;
      result.add(person.email);
    }
  }

  answer = Array.from(result).sort();

  return answer;
}

module.exports = problem6;
