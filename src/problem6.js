function problem6(forms) {
  const emailSet = new Set([]);
  /**
   * - 두 글자 이상의 문자가 연속적으로 순서에 맞추어 포함되어 있는 경우 중복으로 간주한다. -> 닉네임 두 글자씩 저장
    - 크루는 1명 이상 10,000명 이하이다.
    - 이메일은 이메일 형식에 부합하며, 전체 길이는 11자 이상 20자 미만이다. --> 전체 길이 저장
    - 신청할 수 있는 이메일은 `email.com` 도메인으로만 제한한다.
    - 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
    - result는 이메일에 해당하는 부분의 문자열을 오름차순으로 정렬하고 중복은 제거한다.
   */
  const duplicateCheckMap = new Map();
  for (const [email, nickName] of forms) {
    for (let i = 0; i < nickName.length - 1; i++) {
      const word = nickName[i] + nickName[i + 1];
      const curData = duplicateCheckMap.get(word);
      if (curData) {
        const { containEmail, count } = curData;
        duplicateCheckMap.set(word, {
          containEmail: [...containEmail, email],
          count: count + 1,
        });
      } else {
        duplicateCheckMap.set(word, { containEmail: [email], count: 1 });
      }
    }
  }

  for (const [_, data] of duplicateCheckMap) {
    if (data.count > 1) {
      for (const email of data.containEmail) {
        emailSet.add(email);
      }
    }
  }

  // curCount 개수가 2개이상인 것들 이 포함되는 아이디를 추가하기.
  console.log([...emailSet].sort());
  return [...emailSet].sort();
}
problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);
module.exports = problem6;
