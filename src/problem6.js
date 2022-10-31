function problem6(forms) {
  let nickNames = forms.map((el) => el[1]);
  let newArr = forms.map((el) => el[1].split(''));
  let set = new Set(...newArr);
  let overlap = [...set];

  let idx = new Set();
  let result = [];
  for (let i = 0; i < overlap.length - 1; i++) {
    let word = overlap[i] + overlap[i + 1];
    for (let j = 0; j < nickNames.length; j++) {
      if (nickNames[j].includes(word)) {
        idx.add(j);
      }
    }
    word = '';
  }
  [...idx].forEach((el) => {
    result.push(forms[el][0]);
  });

  return result.sort();
}

module.exports = problem6;
