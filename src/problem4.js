function problem4(word) {
  let upper = {};
  let lower = {};
  let result = "";

  for (let i = 97; i <= 122; i++) {
    upper[String.fromCharCode(i - 32)] = String.fromCharCode(219 - i - 32);
    lower[String.fromCharCode(i)] = String.fromCharCode(219 - i);
  }
  for (let i = 0; i < word.length; i++) {
    upper[word[i]]
      ? (result += upper[word[i]])
      : lower[word[i]]
      ? (result += lower[word[i]])
      : (result += word[i]);
  }
  return result;
}

module.exports = problem4;
