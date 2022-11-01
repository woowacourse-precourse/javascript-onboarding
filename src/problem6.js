function problem6(forms) {
  var answer;
  let emailArr = [];
  let nicknameArr = [];
  let checkArr = [];
  let theNick = [];
  let res = [];
  for (let i = 0; i < forms.length; i++) {
    emailArr.push(forms[i][0]);
    nicknameArr.push(forms[i][1]);
  }
  for (let i = 0; i < nicknameArr.length; i++) {
    for (let j = 0; j < nicknameArr.length; j++) {
      checkArr.push(nicknameArr[i].slice(j, j + 2));
      if (checkArr[j].length === 2) {
        theNick.push(checkArr[j]);
      }
    }
  }
  for (let i = 0; i < emailArr.length; i++) {
    for (let j = 0; j < nicknameArr.length; j++) {
      if (nicknameArr[i].includes(theNick[j])) {
        res.push(emailArr[i]);
        console.log(res);
      }
    }
  }
  res.sort();
  const set = new Set(res);
  let answerArr = [...set];
  answer = answerArr;
  return answer;
}

module.exports = problem6;
