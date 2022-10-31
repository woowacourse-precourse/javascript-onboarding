function problem6(forms) {
  var answer = [];
  for (var i = 0; i < forms.length - 1; i++) {
    for (var k = 0; k < forms[i][1].length - 1; k++) {
      var same_count = 0;
      var temp = "";
      temp += forms[i][1][k] + forms[i][1][k + 1];
      for (var j = i + 1; j < forms.length; j++) {
        if (forms[j][1].indexOf(temp) !== -1) {
          same_count++;
          if (answer.indexOf(forms[j][0]) !== -1) continue;
          else answer.push(forms[j][0]);
        }
        if (answer.indexOf(forms[i][0]) === -1 && same_count >= 1)
          answer.push(forms[i][0]);
      }
    }
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
