function problem6(forms) {
  let answer = [];
  forms.forEach((form) => {
    form.push(0);
  });

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      let nickname = forms[i][1][j] + forms[i][1][j + 1];
      for (let k = i + 1; k < forms.length; k++) {
        if (forms[k][1].includes(nickname)) {
          if (!forms[i][2]) {
            answer.push(forms[i][0]);
            forms[i][2] = 1;
          }
          if (!forms[k][2]) {
            answer.push(forms[k][0]);
            forms[k][2] = 1;
          }
        }
      }
    }
  }

  return answer.sort();
}

module.exports = problem6;
