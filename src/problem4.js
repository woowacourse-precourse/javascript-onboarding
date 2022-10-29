function isAlphabet(char) {
  return /[a-zA-Z]/.test(char);
}

function translateIntoFrogLan(char) {
  // not implemented yet
  return char;
}

function problem4(word) {
  const wordArr = word.split("");
  return wordArr.reduce((acc, cur) => (acc += translateIntoFrogLang(cur)), "");
}

module.exports = problem4;
