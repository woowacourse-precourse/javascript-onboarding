function problem6(forms) {
  const nickNameArr = getNickNameArr(forms);
  const splitNickName = getsplitNickName(nickNameArr);
  const duplicateStr = new Set(getDuplicateStr(splitNickName));
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

const getDuplicateStr = (array) =>
  array.filter((item, index) => array.indexOf(item) !== index);

module.exports = problem6;
