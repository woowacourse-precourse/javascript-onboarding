function problem6(forms) {
  var answer;

  let twoWord = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length; j++) {
      twoWord.push(forms[i][1].slice(j, j + 2));
    }
  }

  return answer;
}

module.exports = problem6;
