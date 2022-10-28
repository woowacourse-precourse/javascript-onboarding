function problem6(forms) {
  var answer = [];
  var formsMap = new Map(forms);
  var wordDict = new Map();
  formsMap.forEach((nick) => {
    for (let i = 0; i < nick.length - 1; i++) {
      var word = nick.slice(i, i + 2);
      if (!wordDict.has(word)) wordDict.set(word, 0);
      else wordDict.set(word, wordDict.get(word) + 1);
    }
  });
  wordDict.forEach((reuse, word) => {
    if (reuse > 0) {
      formsMap.forEach((nick, email) => {
        if (nick.includes(word)) answer.push(email);
      });
    }
  });

  answer.sort();
  return answer;
}

module.exports = problem6;
