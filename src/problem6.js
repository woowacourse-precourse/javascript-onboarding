function problem6(forms) {
  let answer;
  let result = new Set([]);

  for (i = 0; i < forms.length; i++) {
    let flag = 0;

    for (j = 0; j < forms[i][1].length - 1; j++) {
      let word = forms[i][1].substr(j, 2);

      for (k = i + 1; k < forms.length; k++) {
        if (forms[k][1].includes(word)) {
          if (flag === 0) {
            result.add(forms[i][0]);
            flag === 1;
          }
          result.add(forms[k][0]);
        }
      }
    }
  }
  answer = [...result];
  answer.sort();
  return answer;
}

module.exports = problem6;
