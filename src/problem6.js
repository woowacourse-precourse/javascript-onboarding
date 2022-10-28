function problem6(forms) {
  var answer;
  return answer;
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
