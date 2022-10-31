const UPPER_CASE_START_CHARCODE = 'A'.charCodeAt(0);
const UPPER_CASE_END_CHARCODE = 'Z'.charCodeAt(0);
const LOWER_CASE_START_CHARCODE = 'a'.charCodeAt(0);
const LOWER_CASE_END_CHARCODE = 'z'.charCodeAt(0);

const isUpperCase = (letter) =>
  letter.charCodeAt(0) >= UPPER_CASE_START_CHARCODE &&
  letter.charCodeAt(0) <= UPPER_CASE_END_CHARCODE;
const isLowerCase = (letter) =>
  letter.charCodeAt(0) >= LOWER_CASE_START_CHARCODE &&
  letter.charCodeAt(0) <= LOWER_CASE_END_CHARCODE;

function isAlphabet(letter) {
  if (isUpperCase(letter) || isLowerCase(letter)) {
    return true;
  }

  return false;
}

function reverseAlphabet(letter) {
  const letterCharCode = letter.charCodeAt(0);
  let reversePoint = 0;
  let reverseCharCode = 0;

  if (isUpperCase(letter)) {
    reversePoint = UPPER_CASE_START_CHARCODE + UPPER_CASE_END_CHARCODE;
  }

  if (isLowerCase(letter)) {
    reversePoint = LOWER_CASE_START_CHARCODE + LOWER_CASE_END_CHARCODE;
  }

  reverseCharCode = reversePoint - letterCharCode;
  return String.fromCharCode(reverseCharCode);
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
