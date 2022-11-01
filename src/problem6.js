function problem6(forms) {
  var answer = [];
  var nickname;
  var count = 0;
  var duplicate = [];
  var dup_name = [];
  var email = [];
  for (var i = 0; i < forms.length; i++) {
    for (var j = 0; j < forms[i][1].length - 1; j++) {
      nickname = forms[i][1].slice(j, j + 2);
      duplicate.push(nickname);
      dup_name = Array.from(new Set(duplicate));
    }
  }

  for (var i = 0; i < dup_name.length; i++) {
    for (var j = 0; j < forms.length; j++) {
      if (forms[j][1].indexOf(dup_name[i]) !== -1) {
        count++;
        email.push(forms[j][0]);
      }
    }
    if (count < 2) {
      email.pop();
    }
    count = 0;
  }
  answer = Array.from(new Set(email));
  answer.sort();
  return answer;
}

module.exports = problem6;
