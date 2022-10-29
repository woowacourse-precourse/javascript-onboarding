function problem6(forms) {
  // 모든 크루들의 닉네임의 두글자씩 딴 배열을 만들고 두 글자씩 딴 배열에서 중복된 값을 추려낸다.
  const splittedNickNames = [];
  const duplicateNickNames = [];

  forms.forEach((form) => {
    const nickName = form[1].split("");

    for (let i = 0; i < nickName.length - 1; i++) {
      const twoLetterNickName = nickName[i] + nickName[i + 1];

      if (splittedNickNames.includes(twoLetterNickName) && !duplicateNickNames.includes(twoLetterNickName)) {
        duplicateNickNames.push(twoLetterNickName);
      } else {
        splittedNickNames.push(twoLetterNickName);
      }
    }
  });

  // 중복된 값을 닉네임으로 포함하고 있는 크루들을 찾아 이메일을 한 배열에 넣는다.
  const duplicateCrewEmails = forms
    .map((form) => {
      const email = form[0];
      const nickName = form[1].split("");

      for (let i = 0; i < nickName.length - 1; i++) {
        const twoLetterNickName = nickName[i] + nickName[i + 1];
        if (duplicateNickNames.includes(twoLetterNickName)) {
          return email;
        }
      }
    })
    .filter((email) => email !== undefined);

  // 배열을 리턴한다.
  return duplicateCrewEmails;
}

module.exports = problem6;
