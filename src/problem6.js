function problem6(forms) {
  const duplicated = {};
  for (i=0; i<forms.length; i++) {
    const email = forms[i][0];
    const nickname = forms[i][1];
    checkingDuplicated(duplicated, nickname, email);
  }
  
  const emailsToContact = new Set();
  for (sliced in duplicated) {
    movingSetElements(emailsToContact, duplicated[sliced]);
  }
  const answer = Array.from(emailsToContact);
  return answer.sort();
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

function movingSetElements(toSet, fromSet) {
  if (fromSet.size <= 1) {
    return toSet;
  }
  for (email of fromSet.values()) {
    toSet.add(email);
  }
  return toSet;
}

module.exports = problem6;
