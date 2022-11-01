function problem4(word) {
  const LowerStr = {};
  const UpperStr = {};

  for (let i = 97; i <= 122; i++) {
    LowerStr[String.fromCharCode(i)] = String.fromCharCode(219 - i);
    UpperStr[String.fromCharCode(i - 32)] = String.fromCharCode(219 - i - 32);
  }
}

problem4("I love you");
module.exports = problem4;
