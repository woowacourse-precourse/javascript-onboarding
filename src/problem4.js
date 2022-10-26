const isUpperCase = (letter) =>
  letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90;
const isLowerCase = (letter) =>
  letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122;

function isAlphabet(letter) {
  if (isUpperCase(letter) || isLowerCase(letter)) {
    return true;
  }

  return false;
}

function reverseAlphabet(letter) {
  const letterAscii = letter.charCodeAt(0);
  let reversePoint = 0;
  let reverseAscii = 0;

  if (isUpperCase(letter)) {
    reversePoint = 155;
    reverseAscii = reversePoint - letterAscii;

    return String.fromCharCode(reverseAscii);
  }

  reversePoint = 219;
  reverseAscii = reversePoint - letterAscii;

  return String.fromCharCode(reverseAscii);
}

function problem4(word) {
  const letters = [...word];
  const reverseLetters = letters.map((letter) => {
    if (!isAlphabet(letter)) {
      return letter;
    }

    return reverseAlphabet(letter);
  });
  const answer = reverseLetters.join('');

  return answer;
}

module.exports = problem4;
