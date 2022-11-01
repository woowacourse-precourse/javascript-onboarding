function problem6(forms) {
  const nickNameList = forms.map((form) => {
    const nickName = form[1];
    nickNameList.push(nickName);
  });

  const twoLetterList = [];
  nickNameList.map((nickName) => {
    for (let i = 0; i < nickName.length - 1; i++) {
      const twoLetterNickName = `${nickName[i]}${nickName[i + 1]}`;
      if (!twoLetterList.includes(twoLetterNickName)) {
        twoLetterList.push(twoLetterNickName);
      }
    }
  });

  return nickNameList;
}

module.exports = problem6;
