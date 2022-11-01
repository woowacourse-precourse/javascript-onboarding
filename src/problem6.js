function problem6(forms) {
  let answer = [];
  for (i = 0; i < forms.length; i++) {
    for (j = 0; j < forms[i][1].length - 1; j++) {
      let splittedWord = forms[i][1].substring(j, j + 2);
      for (k = 0; k < forms.length; k++) {
        if (i === k) continue;
        if (forms[k][1].indexOf(splittedWord) !== -1) {
          answer.push(forms[i][0]);
          break;
        }
      }
    }
  }
  return answer;
}

module.exports = problem6;
