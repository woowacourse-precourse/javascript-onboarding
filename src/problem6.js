function problem6(forms) {
  var temp = new Set([]);
  var warning_word = new Set([]);
  var answer = [];
  for (var i = 0; i < forms.length; i++) {
    for (var j = 0; j < forms[i][1].length - 1; j++) {
      if (temp.has(forms[i][1].substring(j, j + 2))) {
        warning_word.add(forms[i][1].substring(j, j + 2));
      } else temp.add(forms[i][1].substring(j, j + 2));
    }
  }
  for (var i = 0; i < forms.length; i++) {
    for (var j = 0; j < forms[i][1].length - 1; j++) {
      if (warning_word.has(forms[i][1].substring(j, j + 2))) {
        answer.push(forms[i][0]);
      }
    }
  }

  return answer.sort();
}

module.exports = problem6;
