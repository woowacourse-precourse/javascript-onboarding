function problem6(forms) {
  var answer = [];

  let wordList = new Map();
  let overlapSet = new Set();

  for (let i = 0; i < forms.length; i++) {
    if (forms[i][1].length === 1) continue;
    for (let j = 0; j < forms[i][1].length - 1; j++) {
      let word = forms[i][1].slice(j, j + 2);
      if (wordList.get(word) !== undefined)
        overlapSet.add(wordList.get(word)).add(i);
      else wordList.set(word, i);
    }
  }

  for (let item of overlapSet) {
    answer.push(forms[item][0]);
  }

  return answer.sort();
}

module.exports = problem6;
