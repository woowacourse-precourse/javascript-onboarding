function problem6(forms) {
  var answer = [];
  forms.forEach((e) => (e[2] = 0));
  for (let i = 0; i < forms.length; i++) {
    for (let l = 0; l < forms[i][1].length - 1; l++) {
      let word = forms[i][1][l] + forms[i][1][l + 1];
    }
  }
  return answer;
}
module.exports = problem6;
