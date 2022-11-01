function problem6(forms) {
  const duplicated = {};
  for (i=0; i<forms.length; i++) {
    const email = forms[i][0];
    const nickname = forms[i][1];
    checkingDuplicated(duplicated, nickname, email);
  }
  console.log(duplicated);
  var answer;
  return answer;
}

function checkingDuplicated(duplicated, nickname, email) {
  if (nickname.length == 1) {
    return duplicated;
  }
  for (j=0; j<nickname.length-1; j++) {
    const sliced = nickname.substr(j, 2);
    setDefault(duplicated, sliced, email);
  }
  return duplicated;
}

function setDefault(target, key, value) {
  if (target.hasOwnProperty(key)) {
    target[key].add(value);
    return target;
  }
  target[key] = new Set();
  target[key].add(value);
  return target;
}

module.exports = problem6;
