function problem6(forms) {
  let answer = [];
  let arr = [];

  for (let i = 0; i < forms.length; i++) {
    for (let z = 0; z < forms[i][1].length - 1; z++) {
      for (let h = 1 + i; h < forms.length; h++) {
        if (forms[h][1].includes(forms[i][1][z] + forms[i][1][z + 1])) {
          arr.push(forms[h]);
          arr.push(forms[i]);
        }
      }
    }
  }
  return answer;
}

module.exports = problem6;
