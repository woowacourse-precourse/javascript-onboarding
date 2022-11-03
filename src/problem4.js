const UPPER_CASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER_CASE = "abcdefghijklmnopqrstuvwxyz";
const NOT_ALPHABET_REG = /[\W,]+/g;

function getTransChar(char) {
  var charCase = UPPER_CASE.includes(char) ? UPPER_CASE : LOWER_CASE;
  var index = 25 - charCase.indexOf(char);
  return charCase[index];
}

function problem4(word) {
  var transWord = "";

  for (var i = 0; i < word.length; i++) {
    var char = word[i];

    if (char.match(NOT_ALPHABET_REG)) {
      transWord += char;
      continue;
    }

    var transChar = getTransChar(char);
    transWord += transChar;
  }

  return transWord;
}

module.exports = problem4;
