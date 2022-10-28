const {
  removeRepeatingLetters,
  LetterPairDeletingStack,
} = require("./problem2.lib");

function problem2(cryptogram) {
  // Three or more repeating letters only have to be removed once
  // because after the first removal repeating letters can only come in pairs.
  const filteredCryptogram = removeRepeatingLetters(cryptogram);
  const stack = new LetterPairDeletingStack();
  for (const letter of filteredCryptogram) {
    stack.push(letter);
  }
  const answer = stack.toString();
  return answer;
}

module.exports = problem2;
