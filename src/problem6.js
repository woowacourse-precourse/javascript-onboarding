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
  let count = 0;
  for (let i of map.values()) {
    if (i == 0) {
      count++;
    }
  }
  if (count != forms[0][1].length - 1) {
    answer.push(forms[0][0]);
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
