function problem6(forms) {
  let answer = [];

  let a = [];
  let b = [];
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1].length > 1) {
      a = [];
      for (let j = 0; j < forms[i][1].length - 1; j++) {
        a.push(forms[i][1].slice(j, j + 2));
      }
      b.push(a);
    }
  }

  for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (i == j) continue;
      for (let h = 0; h < b[i].length; h++) {
        for (let v = 0; v < b[j].length; v++) {
          if (b[i][h] === b[j][v]) {
            if (!answer.includes(forms[i][0])) {
              answer.push(forms[i][0]);
            }
            if (!answer.includes(forms[j][0])) {
              answer.push(forms[j][0]);
            }
          }
        }
      }
    }
  }
  answer.sort();
  return answer;
}

module.exports = problem6;
