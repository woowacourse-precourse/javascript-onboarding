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
      const deduplicatedEmailsOfSimilarNickname = removeDuplicateEmail(emailsOfSimilarNickName, allEmailsOfSimilarNickname);
      allEmailsOfSimilarNickname.push(...deduplicatedEmailsOfSimilarNickname);
    }
  });

  return allEmailsOfSimilarNickname.sort();
};

const removeDuplicateEmail = (emailsOfSimilarNickName, allEmailsOfSimilarNickname) => {
  const deduplicatedEmails = emailsOfSimilarNickName.map((email) => {
    if (!allEmailsOfSimilarNickname.includes(email)) {
      return email;
    }
  });

  return deduplicatedEmails;
};

const getAllSerialCases = (nickname) => {
  const allSerialCases = [];

  for (let cutUnit = 2; cutUnit <= nickname.length; cutUnit++) {
    for (let index = 0; index <= nickname.length - cutUnit; index++) {
      const serialString = nickname.slice(index, index + cutUnit);

      if (serialString.length === cutUnit) {
        allSerialCases.push(serialString);
      }
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
