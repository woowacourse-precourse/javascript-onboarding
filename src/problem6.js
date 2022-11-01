function problem6(forms) {
  var answer = [];

  const wordList = new Map();
  const overlapSet = new Set();

  for (let i = 0; i < forms.length; i++) {
    const nickname = forms[i][1];
    if (nickname.length === 1) continue;
    overlapCheck(nickname, i, wordList, overlapSet);
  }

  answer = overlapEmail(forms, overlapSet);
  return answer;
}

function overlapCheck(nickname, index, wordList, overlapSet) {
  for (let j = 0; j < nickname.length - 1; j++) {
    const word = nickname.slice(j, j + 2);
    if (wordList.get(word) === undefined) wordList.set(word, index);
    else overlapSet.add(wordList.get(word)).add(index);
  }
}

function overlapEmail(forms, overlapSet) {
  const arr = [];
  for (let item of overlapSet) {
    arr.push(forms[item][0]);
  }
  return arr.sort();
}
module.exports = problem6;
