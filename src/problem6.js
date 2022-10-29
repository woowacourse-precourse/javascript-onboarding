function problem6(forms) {
  var answer = [];
  for (let i = 0; i < forms.length; i++) {
    for (let j = i + 1; j < forms.length; j++) {
      let prev = forms[i][1];
      let curr = forms[j][1];
      let lt = (rt = cnt = 0);
      while (rt < curr.length) {
        if (prev[lt] !== curr[rt]) {
          rt++;
          cnt = 0;
        } else {
          lt++;
          rt++;
          cnt++;
        }
        if (cnt === 2) {
          if (!answer.includes(forms[i][0])) {
            answer.push(forms[i][0]);
          }
          if (!answer.includes(forms[j][0])) {
            answer.push(forms[j][0]);
          }
          break;
        }
      }
    }
  }
  return answer.sort();
}

module.exports = problem6;
