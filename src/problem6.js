function problem6(forms) {
  var answer = [];
  for (let i = 0; i < forms.length; i++) { 
    for (let j = i + 1; j < forms.length; j++) {
      answer = getEmailList(forms, answer, i, j); // get email list
    }
  }

  answer = [...new Set(answer)]; // remove duplicates
  answer.sort(); // sort in ascending order
  return answer;
}

module.exports = problem6;

function getEmailList(forms, answer, i, j) {
  for (let k = 0; k < forms[i][1].length - 1; k++) {
    const iTestPart = forms[i][1][k] + forms[i][1][k + 1];
    for (let l = 0; l < forms[j][1].length - 1; l++) {
      const jTestPart = forms[j][1][l] + forms[j][1][l + 1];
      if (iTestPart === jTestPart) {
        answer.push(forms[i][0], forms[j][0]);
      }
    }
  }
  return answer;
}
