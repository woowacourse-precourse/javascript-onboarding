function problem6(forms) {
  let result = [];
  let rightForms = [];
  for (let i = 0; i < forms.length; i++) {
    if (isRightDomain(forms[i][0]) != 1 && isKoreanName(forms[i][1])) {
      rightForms.push(forms[i]);
    }
  }
  for (let i = 0; i < forms.length - 1; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      if (isSimilarName(forms[i][1], forms[j][1]) === 1) {
        if (!result.includes(forms[i][0])) result.push(forms[i][0]);
        if (!result.includes(forms[j][0])) result.push(forms[j][0]);
      }
    }
  }
  return result.sort();
}

function isRightDomain(email) {
  return email.indexOf("email.com");
}

function isKoreanName(name) {
  for (let i = 0; i < name.length; i++) {
    check = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (!check.test(name[i])) return -1;
  }
  return 1;
}

function isSimilarName(name1, name2) {
  if (name1.length === 1 || name2.length === 1) return -1;
  else {
    for (let i = 0; i < name1.length - 1; i++) {
      if (name2.indexOf(name1.substr(i, 2)) !== -1) return 1;
    }
    return -1;
  }
}

module.exports = problem6;
