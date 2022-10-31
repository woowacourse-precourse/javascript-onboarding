function problem6(forms) {
  var answer = [];
  forms.forEach((e) => (e[2] = 0));
  for (let i = 0; i < forms.length; i++) {
    for (let l = 0; l < forms[i][1].length - 1; l++) {
      let word = forms[i][1][l] + forms[i][1][l + 1];
      for (let j = i + 1; j < forms.length; j++) {
        if (forms[j][1].includes(word)) {
          if (!forms[i][2]) {
            answer.push(forms[i][0]);
            forms[i][2] = 1;
          }
          if (!forms[j][2]) {
            answer.push(forms[j][0]);
            forms[j][2] = 1;
          }
        }
      }
    }
  }
  answer.sort();
  return answer;
}
module.exports = problem6;
