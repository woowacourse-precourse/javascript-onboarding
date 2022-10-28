function problem6(forms) {
  const removeEmailDuplication = (emailList) => {
    return [...new Set(emailList)];
  };
  const sortListAscending = (array) => {
    return array.sort();
  };
  //! forms에서 한두명의 크루원이 설문을 잘못 작성하였다고 전체 에러를 발생시키는 것이 맞을까?
  //! 반복문 한번만 돌면서 form을 인자로 받아 유효성 검사 vs forms를 인자로 받아 유효성 검사
  //! 에러 사항을 우선순위로 정하는법
  //! 에러 하나 발생하면 멈추는 것이 아니라 전체 검사를 한 후 지키지 못한 제약사항을 함께 적어서 에러를 내보내는 법
  //!   -> 이게 힘들다면 누가 에러를 발생시켰는지 정도는 알려주는 것이 좋을 것 같음.
  const isValid = (forms) => {
    checkFormValid(forms);
    checkEmailValid(forms);
    checkNicknameValid(forms);
  };
  const checkFormValid = (forms) => {
    if (forms.length < 1 || forms.length > 1000) {
      throw new Error('크루원이 1명 이상 10,000명 이하가 아닙니다.');
    }
  };
  const checkEmailValid = (forms) => {
    const emails = forms.map((form) => form[0]);
    //email 중복검사
    const emailSet = new Set(emails);
    if (emails.length !== emailSet.size) {
      //?
      throw new Error('크루 중에 동일한 메일이 있습니다.');
    }
    //email 길이 검사
    emails.forEach((email) => {
      if (email.length < 11 || email.length > 19) {
        throw new Error('이메일이 1자 이상 20자 미만이 아닌 크루가 있습니다.');
      }
    });
    //email 형식 검사
    const re = /@email\.com$/;
    emails.forEach((email) => {
      if (!re.test(email)) {
        throw new Error('@email.com 형식에 맞지 않는 크루가 있습니다.');
      }
    });
  };

  const checkNicknameValid = (forms) => {
    const nicknames = forms.map((form) => form[1]);
    const re = /[^가-힣]/;
    nicknames.forEach((nickname) => {
      if (nickname.length < 1 || nickname.length > 19) {
        throw new Error('닉네임이 1자 이상 20자 미만이 아닌 크루가 있습니다.');
      }

      if (re.test(nickname)) {
        throw new Error('닉네임은 완성된 한글만 가능합니다.');
      }
    });
  };
  isValid(forms);
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
  return sortListAscending(removeEmailDuplication(result)); //?
}

module.exports = problem6;
