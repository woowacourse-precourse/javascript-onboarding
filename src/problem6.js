function problem6(forms) {
  var answer = "";
  var string = "";

  for(var i = 0; i < forms.length; i++) {
    for(var j = 0; j < forms[i].length - 1; j++) {
      string = forms[i][1].substr(j, 2);
      for(var k = 0; k < forms.length; k++) {
        if(i === k) continue;

        if(forms[k][1].indexOf(string) != -1) {
            answer += forms[k][0] + ' ';
        }
      }
    }
  }
  answer = answer.slice(0, -1);
  answer = answer.split(' ');
  var newArray = [...new Set(answer)];
  newArray.sort();
  answer = newArray;
  return answer;
}

module.exports = problem6;
