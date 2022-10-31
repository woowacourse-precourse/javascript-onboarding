function problem6(forms) {
  var answer = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      let currentNick = forms[i][1];
      let compareNick = forms[j][1];
      let lt = (rt = cnt = 0);
      while (rt < currentNick.length) {
        if (currentNick[lt] !== compareNick[rt]) {
          rt++;
          cnt = 0;
        } else {
          lt++;
          rt++;
          cnt++;
        }
      }
    }
  }
  return answer;
}

module.exports = problem6;
