function problem6(forms) {
  var splittedName = {};

  const isDuplicated = (word) => {
    return splittedName[word] === undefined ? false : true;
  }

  let answer = forms.reduce((acc, [email, nickname], idx) => {
    for (let i = 0; i < nickname.length - 1; i++) {
      let word = nickname.slice(i, i + 2);

      if (isDuplicated(word)) {
        acc.add(email).add(forms[splittedName[word]][0]);
      } else {
        splittedName[nickname.slice(i, i + 2)] = idx;
      }
    }
    return acc;
  }, new Set());

  return Array.from(answer).sort((a, b) => a - b);
}

module.exports = problem6;
