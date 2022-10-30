function problem4(word) {
  const wordToArray = word.split("");
  const answer = wordToArray
    .map((letter) => convertReverse(letter.charCodeAt()))
    .join("");
  return answer;
}

function convertReverse(letter) {
  const ASCII = {
    upperCaseStart: 65,
    upperCaseEnd: 90,
    lowerCaseStart: 97,
    lowerCaseEnd: 122,
  };

  const upperCaseReverse = ASCII.upperCaseStart + ASCII.upperCaseEnd - letter;
  const lowerCaseReverse = ASCII.lowerCaseStart + ASCII.lowerCaseEnd - letter;

  if (letter >= ASCII.upperCaseStart && letter <= ASCII.upperCaseEnd) {
    return String.fromCharCode(upperCaseReverse);
  }
  if (letter >= ASCII.lowerCaseStart && letter <= ASCII.lowerCaseEnd) {
    return String.fromCharCode(lowerCaseReverse);
  }
  return String.fromCharCode(letter);
}

module.exports = problem4;
