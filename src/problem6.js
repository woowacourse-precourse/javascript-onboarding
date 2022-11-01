/* 
--기능목록--
1. 대상 닉네임에서 가능한 모든 2글자 이상 연속된 글자의 조합을 구한다.
2. 모든 가능한 연속된 글자 조합과 대상 닉네임을 제외한 모든 크루들의 닉네임을 비교해서, 같은 글자가 연속적으로 포함되는 크루의 이메일을 저장한다.
3. 같은 글자가 연속적으로 포함 되는 닉네임을 작성한 모든 지원자의 이메일들을 모은다.

*/

function problem6(forms) {
  return getAllEmailsOfSimilarNickName(forms);
}

const getAllEmailsOfSimilarNickName = (forms) => {
  const allEmailsOfSimilarNickname = [];

  forms.forEach((targetUserInfo) => {
    const [targetUserEmail, targetUserNickname] = targetUserInfo;

    if (!allEmailsOfSimilarNickname.includes(targetUserEmail)) {
      const emailsOfSimilarNickName = getEmailsOfSimilarNickname(targetUserInfo, forms, getAllSerialCases(targetUserNickname));

      if (emailsOfSimilarNickName.length > 0) {
        allEmailsOfSimilarNickname.push(targetUserEmail);
        allEmailsOfSimilarNickname.push(...emailsOfSimilarNickName);
      }
    }
  });

  return allEmailsOfSimilarNickname;
};

const getAllSerialCases = (nickname) => {
  const allSerialCases = [];

  for (let i = 2; i <= nickname.length; i++) {
    for (let j = 0; j <= nickname.length - j; j++) {
      const serialString = nickname.slice(j, j + i);
      if (serialString.length !== i) continue;
      allSerialCases.push(nickname.slice(j, j + i));
    }
  }

  return allSerialCases;
};

const getEmailsOfSimilarNickname = (targetUserInfo, forms, serialCases) => {
  const emailsOfSimilarNickName = [];
  const [targetUserEmail, targetUserNickname] = targetUserInfo;

  serialCases.forEach((serialCase) => {
    const regex = new RegExp(`${serialCase}`);

    forms.forEach((form) => {
      const [userEmail, userNickname] = form;

      if (regex.test(userNickname) && targetUserNickname !== userNickname) {
        emailsOfSimilarNickName.push(userEmail);
      }
    });
  });

  if (emailsOfSimilarNickName.length > 0) emailsOfSimilarNickName.push(targetUserEmail);

  return emailsOfSimilarNickName;
};

module.exports = problem6;
