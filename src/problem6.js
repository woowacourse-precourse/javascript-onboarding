function problem6(forms) {
  const checkingDuplicated = {};
  for (i=0; i<forms.length; i++) {
    const email = forms[i][0];
    const nickname = forms[i][1];
    if (nickname.length == 1) {
      continue;
    }
    for (j=0; j<nickname.length-1; j++) {
      const sliced = nickname.substr(j, 2);
      if (checkingDuplicated.hasOwnProperty(sliced)) {
        checkingDuplicated[sliced].add(email);
        continue;
      }
      checkingDuplicated[sliced] = new Set();
      checkingDuplicated[sliced].add(email);
    }
  }
  var answer;
  return answer;
}

module.exports = problem6;
