function problem6(forms) {
  let result = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      const email = forms[i][0];
      const nickName = forms[i][1];
      const email_2 = forms[j][0];
      const nickName_2 = forms[j][1];

      // (예외처리) 크루는 1명이상 10000명 이하이다.
      if (forms.length < 1 || forms.length > 10000) {
        return -1;
      }

      // (에외처리) 닉네임은 한글만 가능하다.
      if (!/[ㄱ-ㅎ가-힣]/.test(nickName, nickName_2)) {
        return -1;
      }

      // (예외처리) 신청할 수 있는 이메일은 `email.com` 도메인으로 제한한다.
      if (!/[\@email.com]/.test(email, email_2)) {
        return -1;
      }
      // (예외처리) 이메일 전체 길이는 11자 이상 20자 미만이고, 닉네임 전체길이는 1자 이상 20자 미만이다.
      for (let i = 0; i < forms.length; i++) {
        if (
          nickName.length < 1 ||
          nickName.length > 20 ||
          email.length < 10 ||
          email.length > 20 ||
          nickName_2.length < 1 ||
          nickName_2.length > 20 ||
          email_2.length < 10 ||
          email_2.length > 20
        ) {
          return -1;
        }
      }

      if (deplicateCheck(nickName, nickName_2)) {
        result.push(email);
        result.push(email_2);
      }
    }
  }

  result = [...new Set(result)];
  return result.sort();
}

function deplicateCheck(nickName1, nickName2) {
  // 문자열로 되어있는 닉네임을 한글자씩 나눈다.
  nickName1 = nickName1.split("");
  nickName2 = nickName2.split("");
  for (let i = 0; i < nickName1.length - 1; i++) {
    for (let j = 0; j < nickName2.length - 1; j++) {
      // 각각 닉네임마다 연속되는 두 자리를 만들고 이를 비교해서 같다면 true를 반환한다.
      const substring1 = nickName1[i] + nickName1[i + 1];
      const substring2 = nickName2[j] + nickName2[j + 1];
      if (substring1 === substring2) return true;
    }
  }
  return false;
}

module.exports = problem6;
