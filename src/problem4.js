function problem4(word) {
  const LowerStr = {};
  const UpperStr = {};

  for (let i = 97; i <= 122; i++) {
    LowerStr[String.fromCharCode(i)] = String.fromCharCode(219 - i);
    UpperStr[String.fromCharCode(i - 32)] = String.fromCharCode(219 - i - 32);
  }
  checkWords(LowerStr, UpperStr, word);
}

const checkWords = (LowerStr, UpperStr, word) => {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    if (LowerStr[word[i]]) {
      answer += LowerStr[word[i]];
      continue;
    }
    if (UpperStr[word[i]]) {
      answer += UpperStr[word[i]];
      continue;
    }
    answer += word[i];
  }
  return answer;
};

problem4("I love you");
module.exports = problem4;
