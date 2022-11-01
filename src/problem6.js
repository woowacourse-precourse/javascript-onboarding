function problem6(forms) {
  const answer = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      if (forms[i][1].length > 1) {
        const nicknamePiece = forms[i][1].substr(j, 2);
        for (let k = 0; k < forms.length; k++) {
          if (k !== i) {
            if (
              forms[k][1].includes(nicknamePiece) &&
              !answer.includes(forms[k][0])
            ) {
              answer.push(forms[k][0]);
            }
          }
        }
      }
    }
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
