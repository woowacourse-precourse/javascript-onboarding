function problem6(forms) {
  var answer;
  let isDuplicatedNickName = new Array(forms.length);
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
