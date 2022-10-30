function problem4(word) {
  const wordToArray = word.split("");
  const answer = wordToArray
    .map((letter) => convertReverse(letter.charCodeAt()))
    .join("");
  return answer;
}

function convertReverse(letter) {
  const upperCaseStart = 65,
    upperCaseEnd = 90;
  const lowerCaseStart = 97,
    lowerCaseEnd = 122;

  const upperCaseReverse = upperCaseStart + upperCaseEnd - letter;
  const lowerCaseReverse = lowerCaseStart + lowerCaseEnd - letter;

  if (letter >= upperCaseStart && letter <= upperCaseEnd) {
    return String.fromCharCode(upperCaseReverse);
  }
  if (letter >= lowerCaseStart && letter <= lowerCaseEnd) {
    return String.fromCharCode(lowerCaseReverse);
  }
  return String.fromCharCode(letter);
}

module.exports = problem4;
