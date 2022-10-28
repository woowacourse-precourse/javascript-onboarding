function problem6(forms) {
  emailSet = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      for (let k = 0; k < forms[i].length; k++) {
        //글자가 2개일 경우 예외처리
        if (forms[i][1].substring(k, k + 2).length < 2) {
          break;
        }
        if (forms[j][1].includes(forms[i][1].substring(k, k + 2))) {
          emailSet.push(forms[i][0]);
          emailSet.push(forms[j][0]);
        }
      }
    }
  }
  return [...new Set(emailSet)].sort();
}

module.exports = problem6;
