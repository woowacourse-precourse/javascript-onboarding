function problem6(forms) {
  console.log(forms);
  let result = [];
  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1].length == 1) {
      //이름이 1글자면 제외
      continue;
    } else {
      let overlap = [];
      for (let j = 0; j < forms[i][1].length; j++) {
        overlap.push(forms[i][1][0] + forms[i][1][1]);
      }
      for (let j = 0; j < forms.length; j++) {
        if (i == j) {
          continue;
        } else {
          for (let a = 0; a < overlap.length; a++) {
            if (forms[j][1].includes(overlap[a])) {
              result.push(forms[j][0]);
              break;
            }
          }
        }
      }
    }
  }
  result = result.sort();
  result = [...new Set(result)];
  return result;
}

module.exports = problem6;
