function splitTwo(nickname) {
  let splitTwoNickNameArray = [];
  for (let i = 0; i < nickname.length - 1; i++) {
    splitTwoNickNameArray += nickname[i] + nickname[i + 1] + ",";
  }
  return splitTwoNickNameArray;
}
function nicknameSplitTwoArray(forms) {
  let nickNameArray = [];
  forms.forEach((val) => {
    nickNameArray += splitTwo(val[1]);
  });
  return nickNameArray.split(",").slice(0, -1);
}
function nicknameDupleCountMap(nickname) {
  const nickNameMap = nickname.reduce((accu, curr) => {
    accu.set(curr, (accu.get(curr) || 0) + 1);
    return accu;
  }, new Map());
  return nickNameMap;
}
function nicknameDuple(nickname) {
  let dupliData = [];
  nickname.forEach((count, dupli) => {
    if (count > 1) dupliData.push(dupli);
  });
  return dupliData;
}
function problem6(forms) {
  let answer = [];
  let nicknameArray = [];
  let dupleCountMap = new Map();
  let dupliData = [];
  nicknameArray = nicknameSplitTwoArray(forms);
  dupleCountMap = nicknameDupleCountMap(nicknameArray);
  dupliData = nicknameDuple(dupleCountMap);
  return answer;
}

module.exports = problem6;
