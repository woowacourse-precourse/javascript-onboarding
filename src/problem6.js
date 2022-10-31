function problem6(forms) {
  var answer;
  const email = [];
  const nickname = [];
  // 이메일, 닉네임 목록 분리
  forms.forEach((el) => {
    email.push(el[0]);
    nickname.push(el[1]);
  });
  for (const nick of nickname) {
    let temp;
    // 닉네임 2글자씩 추출
    for (let i = 0; i < nick.length - 1; i++) {
      temp = nick.slice(i, i + 2);
    }
  }
  return answer;
}

module.exports = problem6;
