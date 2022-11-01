function problem6(forms) {
  let answer = new Set()
  let length = forms.length

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = 0; k < forms[i][1].length-1; k++) {
        for (let l = 0; l < forms[j][1].length-1; l++) {
          if (forms[i][1][k] === forms[j][1][l] && forms[i][1][k + 1] === forms[j][1][l + 1]) {
            answer.add(forms[i][0])
            answer.add(forms[j][0])
          }
        }
      }
    }
  }
  return Array.from(answer).sort();
}

module.exports = problem6;
