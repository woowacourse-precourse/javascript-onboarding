function problem6(forms) {
  var answer = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length-1; j++) {
      let strFind = forms[i][1].substring(j, j + 2);
      for (let k = i + 1; k < forms.length; k++) {
        if (forms[k][1].includes(strFind)) {
          answer.push(forms[i][0]);
          answer.push(forms[k][0]);
        }
      }
    }
  }
  
  set =  new Set(answer);
  answer = [...set];
  answer.sort();

  return answer;
}

module.exports = problem6;
