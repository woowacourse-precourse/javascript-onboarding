function problem6(forms) {
  // 유저의 중복삽입을 방지
  let answer = new Set();

  // 1) 비교는 항상 0번째의 유저와 하며, shift로 0번째 유저가 순회마다 교체 됨
  while (forms.length > 1) {
    const [email, nickname] = forms[0];
    // 6) 닉네임이 1글자일 경우 비교자체를 중지
    if (nickname.length === 1) {
      forms.shift();
      continue;
    }
    // 2) 임시배열에 0번째의 유저의 닉네임을 2글자로 쪼갠 문자열들을 넣는 과정
    const temp = [];
    for (let i = 0; i < nickname.length - 1; i++) {
      temp.push(nickname[i] + nickname[i + 1]);
    }
    // 3) 1번째 유저부터 중복이 있는지 비교
    for (let j = 1; j < forms.length; j++) {
      const nicknameForCompare = forms[j][1];
      for (const twoLetters of temp) {
        if (nicknameForCompare.includes(twoLetters)) {
          const emailOfDuplicate = forms[j][0];
          answer.add(emailOfDuplicate);
          answer.add(email);
          // 4) 중복이 하나라도 발견하면 answer에 더해주고, 탐색을 중지
          break;
        }
      }
    }
    forms.shift();
  }
  // 5) set을 배열로 전환, 문자열 오름차순 정렬
  answer = [...answer].sort();
  return answer;
}

module.exports = problem6;
