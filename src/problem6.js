function removeDuplication(emailArr) {
  const emailSet = new Set(emailArr);

  return [...emailSet];
}

function findSimilarNickname(forms) {
  if (forms.length === 1) {
    return [];
  }
  let check = false;
  let emailArr = [];

  for (let base = 0; base < forms.length - 1; base++) {
    for (let other = base + 1; other < forms.length; other++) {
      for (let index = 0; index < forms[base][1].length - 1; index++) {
        let twoChar = forms[base][1].substr(index, 2);
        if (forms[other][1].includes(twoChar)) {
          emailArr.push(forms[other][0]);
          check = true;
          break;
        }
      }
    }
    if (check === true) {
      emailArr.push(forms[base][0]);
      check = false;
    }
  }

  emailArr = removeDuplication(emailArr);

  return emailArr.sort();
}

function problem6(forms) {
  var answer;

  answer = findSimilarNickname(forms);

  return answer;
}

module.exports = problem6;
