function problem6(forms) {
  const nickNameList = forms.map((form) => {
    const nickName = form[1];
    return nickName;
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

  let countList = Array.from({ length: twoLetterList.length - 1 }, () => 0);
  nickNameList.map((nickName) => {
    for (let i = 0; i < twoLetterList.length; i++) {
      const twoLetter = twoLetterList[i];
      if (nickName.includes(twoLetter)) {
        countList[i]++;
      }
    }
  });
  countList = countList.filter((count) => count >= 2);

  const result = [];
  for (let i = 0; i < countList.length; i++) {
    for (let j = 0; j < nickNameList.length; j++) {
      const nickName = nickNameList[j];
      const twoLetter = twoLetterList[i];
      if (nickName.includes(twoLetter)) {
        const email = forms[j][0];
        result.push(email);
      }
    }
  }

  return result.sort();
}

module.exports = problem6;
