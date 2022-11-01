function problem6(forms) {
  var answer = [];
  let map = new Map();
  for (var i = 0; i < forms.length; i++) {
    for (var j = 0; j < forms[i][1].length - 1; j++) {
      new_key = forms[i][1][j] + forms[i][1][j + 1];
      if (map.has(new_key)) {
        answer.push(forms[i][0]);
        map.set(new_key, i);
      } else {
        map.set(new_key, i);
      }
    }
  }
  return answer;
}

module.exports = problem6;
