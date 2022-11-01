function problem6(forms) {
  let resultArr = [];
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

  let diffWord = wordArr.filter(
    (name, index) => wordArr.indexOf(name) !== index
  );

  const arrSet = [...new Set(diffWord)];

  for (let i = 0; i < forms.length; i++) {
    for (let j = 0; j < arrSet.length; j++) {
      if (forms[i][1].includes(arrSet[j])) {
        resultArr.push(forms[i][0]);
      }
    }
  }

  return resultArr.sort();
}

module.exports = problem6;
