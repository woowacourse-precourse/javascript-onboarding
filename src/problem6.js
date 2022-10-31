function problem6(forms) {
  var answer = [];
  var wordDict = new Map();
  forms.forEach((crew) => {
    for (let i = 0; i < crew[1].length - 1; i++) {
      var word = crew[1].slice(i, i + 2);
      if (!wordDict.has(word)) wordDict.set(word, 0);
      else wordDict.set(word, wordDict.get(word) + 1);
    }
  });
  wordDict.forEach((reuse, word) => {
    if (reuse > 0) {
      forms.forEach((crew) => {
        if (crew[1].includes(word)) answer.push(crew[0]);
      });
    }
  });

  answer.sort();
  return answer;
}

module.exports = problem6;
