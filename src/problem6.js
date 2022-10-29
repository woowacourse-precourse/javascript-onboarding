function problem6(forms) {
  var answer;
  const crew = [];
  const splittedNicknames = new Set();

  for (const [email, nickname] of forms) {
    crew.push({ email: email, nickname: nickname });
    //2글자씩 자른 닉네임을 set에 넣음
    for (let i = 0; i < nickname.length - 1; i++) {
      const slicedNickname = nickname.slice(i, i + 2);
      splittedNicknames.add(slicedNickname);
    }
  }

  return answer;
}

module.exports = problem6;
