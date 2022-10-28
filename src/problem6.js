function problem6(forms) {
  var answer;
  return answer;
}

function findDuplicateCrew(forms) {
  const result = new Set();

  for (let i = 0; i < forms.length; i++) {
    const [emailA, nicknameA] = forms[i];
    for (let j = i + 1; j < forms.length; j++) {
      const [emailB, nicknameB] = forms[j];
      if (hasDuplicateStr(nicknameA, nicknameB)) {
        result.add(emailA);
        result.add(emailB);
      }
    }
  }

  return result;
}

function hasDuplicateStr(str1, str2) {
  for (let i = 0; i < str1.length - 1; i++) {
    if (str2.includes(str1.substring(i, i + 2))) {
      return true;
    }
  }

  return false;
}

module.exports = problem6;
