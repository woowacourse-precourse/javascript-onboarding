function problem6(forms) {
  let answer = new Set();
  let noneDuplicated = [];
  let nickName = [];
  let nameKey = [];
  let result = [];

  for (let i = 0; i < forms.length; i++) {
    nickName.push(forms[i][1]);
    for (let j = 0; j < nickName[i].length - 1; j++) {
      nameKey = nickName[i].substring(j, j + 2);
      if (noneDuplicated[nameKey]) {
        result = noneDuplicated[nameKey];
        if (result !== forms[i][0]) {
          answer.add(result);
          answer.add(forms[i][0]);
        }
      }
      noneDuplicated[nameKey] = forms[i][0];
    }
  }

  answer = [...answer].sort();
  return answer;
}

module.exports = problem6;
