function problem6(forms) {
  var answer = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      for (let k = 0; k < forms[i][1].length - 1; k++) {
        let compareWord = forms[i][1][k] + forms[i][1][k + 1];
        if (forms[j][1].includes(compareWord)) {
          answer.push(forms[i][0], forms[j][0]);
        }
      }
    }
  }

  answer = new Set(answer);
  answer = [...answer];
  answer.sort();

  return answer;
}

module.exports = problem6;
