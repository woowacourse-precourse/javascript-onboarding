function problem6(forms) {
  var answer;
  const idLog = [];
  const banList = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      if (idLog.includes(forms[i][1][j] + forms[i][1][j + 1])) {
        banList.push(forms[i][0]);
      }
      idLog.push(forms[i][1][j] + forms[i][1][j + 1]);
    }
  }
  for (let k = 0; k < forms[0][1].length - 1; k++) {
    if (idLog.includes(forms[0][1][k] + forms[0][1][k + 1])) {
      banList.push(forms[0][0]);
      break;
    }
  }
  answer = banList;
  answer.sort();
  return answer;
}

module.exports = problem6;
