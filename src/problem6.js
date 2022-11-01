function problem6(forms) {
  var answer;

  const emailArr = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      const checkNickname = forms[i][1].slice(j, j + 2);
      for (let k = 0; k < forms.length; k++) {
        if (forms[k][1].includes(checkNickname) && forms[i] !== forms[k]) {
          emailArr.push(forms[k][0]);
        }
      }
    }
  }

  return answer;
}

module.exports = problem6;
