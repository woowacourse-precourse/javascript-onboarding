function problem6(forms) {
  // forms의 길이가 1이상이 아닌 경우 "Error: forms의 길이가 1이상이어야 합니다"라는 문자열을 반환한다.
  if (forms.length < 1) return "Error: forms의 길이가 1이상이어야 합니다";

  // forms의 길이가 10,000명이하가 아닌 경우 "Error: forms의 길이가 10000이하이어야 합니다"라는 문자열을 반환한다.
  if (forms.length > 10000) return "Error: forms의 길이가 10000이하이어야 합니다";

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
  // 이메일을 문자열 오름차순으로 정렬하고 중복을 제거한 뒤 배열을 반환한다.
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
    .filter((email) => email !== undefined)
    .sort();

  return [...new Set(duplicateCrewEmails)];
}

module.exports = problem6;
