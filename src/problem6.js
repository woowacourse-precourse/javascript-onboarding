const result = [];

function problem6(forms) {
  var answer;
  let length = 0;
  for (let i = 0; i < forms.length; i++) {
    length = result.length;
    for (let z = i + 1; z < forms.length; z++) {
      if (result.includes(forms[z][0])) {
        continue;
      }
      for (let j = 0; j < forms[i][1].length - 1; j++) {
        if (forms[z][1].includes(forms[i][1].substr(j, j + 2))) {
          result.push(forms[z][0]);
          break;
        }
      }
    }
    if (length < result.length) {
      result.push(forms[i][0]);
    }
  }

  return (answer = result.sort());
}
module.exports = problem6;
