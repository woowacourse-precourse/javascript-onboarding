function problem6(forms) {
  const nickNameArr = getNickNameArr(forms);
  const splitNickName = getsplitNickName(nickNameArr);
  const duplicateStr = new Set(getDuplicateStr(splitNickName));
  const duplicateNickName = getDuplicateNickName(duplicateStr, nickNameArr);
  const nickNameIndex = getNickNameIndex(duplicateNickName, nickNameArr);
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

const getDuplicateNickName = (duplicateStr, nickNameArr) => {
  for (let str of duplicateStr) {
    return nickNameArr.filter((item) => item.includes(str));
  }
};

const getNickNameIndex = (duplicateNickName, nickNameArr) => {
  const indexArr = [];
  for (let i of duplicateNickName) {
    indexArr.push(nickNameArr.indexOf(i));
  }
  return indexArr;
};

module.exports = problem6;
