function problem6(forms) {
  const EMAIL_REGEX = /^\w{1,9}@email.com$/;
  const NICKNAME_REGEX = /^[가-힣]{1,19}$/;
  const MIN_FORMS_LENGTH = 1;
  const MAX_FORMS_LENGTH = 1;

  const checkFormsValid = (forms) => {
    checkFormLength(forms);
    checkEmailValid(forms);
    checkNicknameValid(forms);
  };

  const checkFormLength = (forms) => {
    if (forms.length < MIN_FORMS_LENGTH || forms.length > MAX_FORMS_LENGTH) {
      throw new Error('크루원이 1명 이상 10,000명 이하가 아닙니다.');
    }
  };

  const checkEmailValid = (forms) => {
    const emails = forms.map((form) => form[0]);
    emails.forEach(checkEmailFormat);
  };

  const checkEmailFormat = (email) => {
    if (!EMAIL_REGEX.test(email)) {
      throw new Error('이메일은 @email.com 도메인을 사용해야하며, 11자 이상 20자 미만입니다.');
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
    if (!NICKNAME_REGEX.test(nickname)) {
      throw new Error('닉네임은 한글만 가능하고 전체 길이는 1자 이상 20자 미만입니다.');
    }
  };

  const getTwoSizeWord = (twoSizeWords, [_, nickname]) => {
    twoSizeWords.push(
      ...[...nickname]
        .reduce((acc, _, idx) => {
          acc.push(nickname.slice(idx, idx + 2));
          return acc;
        }, [])
        .flat()
    );
    return twoSizeWords;
  };

  const isTwoSizeWord = (words) => {
    return words.length === 2;
  };

  const findEmailsOfDuplicatedNickname = (emailList, twoSizeWord) => {
    const EmailsIncludedWord = forms.reduce((currentList, [email, nickname]) => {
      if (nickname.includes(twoSizeWord)) {
        currentList.push(email);
      }
      return currentList;
    }, []);

    if (EmailsIncludedWord.length >= 2) {
      emailList.push(...EmailsIncludedWord);
      emailList = [...new Set(emailList)];
    }
    return emailList;
  };

  checkFormsValid(forms);

  return forms
    .reduce(getTwoSizeWord, [])
    .filter(isTwoSizeWord)
    .reduce(findEmailsOfDuplicatedNickname, [])
    .sort();
}

module.exports = problem6;
