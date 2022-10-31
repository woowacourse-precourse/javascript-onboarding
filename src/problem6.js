function problem6(forms) {
  var answer = [];

  for (let i = 0; i < forms.length; i++) {
    if (!forms[i][0].includes("@email.com") || forms[i][1].length < 2) {
      continue;
    }

    for (let j = 0; j < forms[i][1].length - 1; j++) {
      for (let k = j + 1; k < forms[i][1].length; k++) {
        let word = forms[i][1].slice(j, k + 1);
        for (let s = 0; s < forms.length; s++) {
          if (s === i) {
            continue;
          }
          if (
            forms[s][1].includes(word) &&
            answer.indexOf(forms[s][0]) === -1
          ) {
            answer.push(forms[s][0]);
          }
        }
      }
    }
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
