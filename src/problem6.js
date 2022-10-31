function problem6(forms) {
  let answer = new Set();
  // forms에서 비교군과, 중복 닉네임을 가진 유저를 빼나간다
  // 비교는 항상 0번째의 유저와 하며, shift로 0번째 유저가 교체되어 나간다
  while (forms.length > 1) {
    const [email, nickname] = forms[0];
    // 임시공간에 0번째의 유저의 닉네임을 2글자로 쪼갠 문자열들을 넣는다
    const temp = [];
    for (let i = 0; i < nickname.length - 1; i++) {
      temp.push(nickname[i] + nickname[i + 1]);
    }
    forms.shift();
  }
  return answer;
}

module.exports = problem6;
