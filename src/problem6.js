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

function problem6(forms) {
  let answer = [];
  let nicknameArray = [];
  nicknameArray = nicknameSplitTwoArray(forms);
  return answer;
}

module.exports = problem6;
