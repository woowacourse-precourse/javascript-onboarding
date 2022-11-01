function problem6(forms) {
  var answer;

  let twoWord = [];
  let wordArr = [];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < forms[i][1].length; j++) {
      twoWord.push(forms[i][1].slice(j, j + 2));
    }
  }

  for (let i = 0; i < twoWord.length; i++) {
    if (twoWord[i].length !== 1) {
      wordArr.push(twoWord[i]);
    }
  }

  return answer;
}

module.exports = problem6;
