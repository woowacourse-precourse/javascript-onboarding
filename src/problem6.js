function problem6(forms) {
  const nickNameList = getNickNameList(forms);
  const twoLetterCount = getTwoLetterCount(nickNameList);
  const twoLetterList = Object.keys(twoLetterCount);
  const duplicateTwoLetter = getDuplicateTwoLetter(
    twoLetterCount,
    twoLetterList
  );
  const emailList = getDuplicateNicknameEmail(forms, duplicateTwoLetter);
  emailList.sort();
  return emailList;
}

function getNickNameList(forms) {
  const nickNameList = [];
  forms.map((form) => {
    const nickName = form[1];
    nickNameList.push(nickName);
  });
  return nickNameList;
}

function getTwoLetterCount(nickNameList) {
  const twoLetterCount = {};
  nickNameList.map((nickName) => {
    for (let i = 0; i < nickName.length - 1; i++) {
      const twoLetter = `${nickName[i]}${nickName[i + 1]}`;
      twoLetterCount[twoLetter]
        ? twoLetterCount[twoLetter]++
        : (twoLetterCount[twoLetter] = 1);
    }
  });
  return twoLetterCount;
}

function getDuplicateTwoLetter(twoLetterCount, twoLetterList) {
  return twoLetterList.filter((twoLetter) => twoLetterCount[twoLetter] >= 2);
}

function getDuplicateNicknameEmail(forms, duplicateTwoLetter) {
  const emailList = [];
  forms.map((form) => {
    const email = form[0];
    const nickName = form[1];
    for (let i = 0; i < nickName.length - 1; i++) {
      const twoLetter = `${nickName[i]}${nickName[i + 1]}`;
      if (duplicateTwoLetter.includes(twoLetter)) {
        emailList.push(email);
        break;
      }
    }
  });
  return emailList;
}

module.exports = problem6;
