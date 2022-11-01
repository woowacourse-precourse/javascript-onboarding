function problem6(forms) {
  var answer;
  let isDuplicatedNickName = new Array(forms.length);
  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      if (isDuplicationOfPart(forms[i][1], forms[j][1])) {
        isDuplicatedNickName[i] = 1
        isDuplicatedNickName[j] = 1
      }
    }
  }
  return answer;
}

const isDuplicationOfPart = (target, check) => {
  for (let i = 1; i < target.length; i++) {
    if (check.includes(target.slice(i - 1, i + 1))) {
      return true
    }
  }
  return false
}

module.exports = problem6;
