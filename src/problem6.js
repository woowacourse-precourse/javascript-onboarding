function problem6(forms) {
  const duplicated = {};
  for (i=0; i<forms.length; i++) {
    const email = forms[i][0];
    const nickname = forms[i][1];
    checkingDuplicated(duplicated, nickname, email);
  }
  var answer;
  return answer;
}

function checkingDuplicated(duplicated, nickname, email) {
  if (nickname.length == 1) {
    return duplicated;
  }
  for (i=0; i<nickname.length-1; i++) {
    const sliced = nickname.substr(i, 2);
    if (duplicated.hasOwnProperty(sliced)) {
      duplicated[sliced].add(email);
      continue;
    }
  }
  duplicated[sliced] = new Set();
  duplicated[sliced].add(email);
  return duplicated;
}
module.exports = problem6;
