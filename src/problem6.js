function problem6(forms) {
  let answer;

  for (i = 0; i < forms.length; i++) {
    let flag = 0;

    for (j = 0; j < forms[i][1].length - 1; j++) {
      let word = forms[i][1].substr(j, 2);

      for (k = i + 1; k < forms.length; k++) {
        if (forms[k][1].includes(word)) {
        }
      }
    }
  }

  return answer;
}

module.exports = problem6;
