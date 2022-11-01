function problem6(forms) {
  var answer = [];
  let overlapEmail = [];
  let overlapName = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      !overlapName.includes(forms[i][1][j] + forms[i][1][j + 1]) &&
        overlapName.push(forms[i][1][j] + forms[i][1][j + 1]);
    }
  }
  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms.length; j++) {
      forms[i][1].includes(overlapName[j]) && overlapEmail.push(forms[i][0]);
    }
  }
  answer = overlapEmail
    .filter((el, idx) => {
      return overlapEmail.indexOf(el) !== idx;
    })
    .sort();
  return answer;
}

module.exports = problem6;
