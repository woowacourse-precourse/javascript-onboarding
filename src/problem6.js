function problem6(forms) {
  let answer = [];
  let isDuplicatedNickName = new Array(forms.length);

  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1].length === 1) {
      continue
    }
    if (isDuplicatedNickName[i]) {
      continue
    }
    for (let j = i + 1; j < forms.length; j++) {
      if (forms[j][1].length === 1) {
        continue
      }
      if (isDuplicationOfPart(forms[i][1], forms[j][1])) {
        isDuplicatedNickName[i] = 1
        isDuplicatedNickName[j] = 1
      }
    }
  }

  for (let i = 0; i < isDuplicatedNickName.length; i++) {
    if (isDuplicatedNickName[i]) {
      answer.push(forms[i][0])
    }
  }

  answer.sort();

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
