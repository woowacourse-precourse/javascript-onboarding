function problem6(forms) {
  const EMAIL_REGEX = /^\w{1,9}@email.com$/;
  const NICKNAME_REGEX = /^[가-힣]{1,19}$/;

  const checkFormsValid = (forms) => {
    checkFormLength(forms);
    checkEmailValid(forms);
    checkNicknameValid(forms);
  };

  const checkFormLength = (forms) => {
    if (forms.length < 1 || forms.length > 1000) {
      throw new Error('크루원이 1명 이상 10,000명 이하가 아닙니다.');
    }
  };

  const checkEmailValid = (forms) => {
    const emails = forms.map((form) => form[0]);
    checkEmailLength(emails);
    emails.forEach(checkEmailFormat);
  };

  const checkEmailLength = (emails) => {
    const emailSet = new Set(emails);
    if (emails.length !== emailSet.size) {
      throw new Error('크루 중에 동일한 메일이 있습니다.');
    }
  };

  const checkEmailFormat = (email) => {
    if (!EMAIL_REGEX.test(email)) {
      throw new Error(
        '이메일은 @email.com 도메인을 사용해야하며, 11자 이상 20자 미만입니다.'
      );
    }
  };

  const checkNicknameValid = (forms) => {
    const nicknames = getNicknames(forms);
    nicknames.forEach(checkNickName);
  };

  const getNicknames = (forms) => {
    return forms.map((form) => form[1]);
  };

  const checkNickName = (nickname) => {
    if (NICKNAME_REGEX.test(nickname)) {
      throw new Error(
        '닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만입니다.'
      );
    }
  };

  const removeEmailDuplication = (emailList) => {
    return [...new Set(emailList)];
  };

  const sortListAscending = (array) => array.sort();

  checkFormsValid(forms);

  const result = [];
  forms.forEach((form, formIndex) => {
    const [_, name] = form;

    for (let i = 0; i < form.length; i++) {
      const word = name.substring(i, i + 2);
      for (let j = formIndex + 1; j < forms.length; j++) {
        const compareName = forms[j][1];
        if (compareName.includes(word)) {
          result.push(form[0]);
          result.push(forms[j][0]);
        }
      }
    }
  });
  return sortListAscending(removeEmailDuplication(result));
}
problem6([
  ['jm@email.com', '제이엠'],
  ['jason@email.com', '제이슨'],
  ['woniee@email.com', '워니'],
  ['mj@email.com', '엠제이'],
  ['nowm@email.com', '이제엠'],
]);
module.exports = problem6;
