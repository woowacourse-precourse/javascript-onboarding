const result = [];

function problem6(forms) {
  var answer;
  for (let i = 0; i < forms.length; i++) {
    for (let z = i + 1; z < forms.length; z++) {
      for (let j = 0; j < forms[i][1].length - 1; j++) {
        if (forms[z][1].includes(forms[i][1].substr(j, j + 2))) {
          result.push(forms[z][0]);
          break;
        }
      }
    }
  }

  return answer;
}
module.exports = problem6;
