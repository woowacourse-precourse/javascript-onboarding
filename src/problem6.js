function problem6(forms) {
  const nickNameArr = getNickNameArr(forms);
  const splitNickName = getsplitNickName(nickNameArr);
}

const getNickNameArr = (forms) => {
  return forms.map((item) => item[1]);
};

const getsplitNickName = (nickNameArr) => {
  const splitNickName = [];
  for (let nickName of nickNameArr) {
    for (let index = 0; index < nickName.length - 1; index++) {
      splitNickName.push(nickName[index] + nickName[index + 1]);
    }
  }
  return splitNickName;
};

module.exports = problem6;
