function problem6(forms) {
  // forms의 key, value값을 email과 nickName 배열에 따로 담는다.
  const email = [...new Map(forms).keys()];
  const nickName = [...new Map(forms).values()];

  // nickName을 연속되는 2글자씩 잘라서 set 집합을 만들기 위한 배열 공간을 만든다.
  let nickNameElementSet = [];

  // (예외처리) 크루는 1명이상 10000명 이하이다.
  if (forms.length < 1 || forms.length > 10000) {
    return -1;
  }

  // (에외처리) 닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만이다.
  if (/[^ㄱ-ㅎ가-힣]/.test(nickName)) {
    return -1;
  }

  // (예외처리) 신청할 수 있는 이메일은 `email.com` 도메인으로 제한한다.
  if (/[^@email.com]/.test(email)) {
    return -1;
  }
  // (예외처리) 이메일 전체 길이는 11자 이상 20자 미만이고, 닉네임 전체길이는 1자 이상 20자 미만이다.
  for (let i = 0; i < forms.length; i++) {
    if (
      nickName[i].length < 1 ||
      nickName[i].length > 20 ||
      email[i].length < 10 ||
      email[i].length > 20
    ) {
      return -1;
    }
  }

  const nicknameSet = nickName.map((nickName) => {
    for (let i = 0; i < nickName.length; i++) {
      // 연속되는 두 글자씩 잘라 배열에 담는다.
      const nickNameElement = nickName[i] + nickName[i + 1];
      nickNameElementSet.push(nickNameElement);
    }
    // 중복을 제거하기 위해 set 객체를 통해 집합을 만들고 반환한다.
    nickNameElementSet = [...new Set(nickNameElementSet)];
    return nickNameElementSet;
  });
}

module.exports = problem6;
