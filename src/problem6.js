function problem6(forms) {
  const answer = [];
  const nickNameHash = {};
  for (const [email, nickname] of forms) {
    for (let i = 0; i < nickname.length; i++) {
      for (let j = i + 2; j <= nickname.length; j++) {
        const nickName = nickname.slice(i, j);
        if (nickNameHash[nickName]) {
          nickNameHash[nickName] += 1;
        } else {
          nickNameHash[nickName] = 1;
        }
      }
    }
  }

  const duplicatedNickNames = Object.entries(nickNameHash)
    .filter(([, value]) => value > 1)
    .map(([key]) => key);

  for (const [email, nickname] of forms) {
    let isDuplicated = false;
    for (const duplicatedNickName of duplicatedNickNames) {
      if (nickname.includes(duplicatedNickName)) {
        isDuplicated = true;
      }
    }
    if (isDuplicated) {
      answer.push(email);
    }
  }

  answer.sort();

  const answerSet = new Set(answer);

  return [...answerSet];
}

module.exports = problem6;
