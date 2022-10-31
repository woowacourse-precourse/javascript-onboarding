const ALPHABET_REGEX = /[a-zA-Z]/;
const [CHARCODE_A, CHARCODE_Z, CHARCODE_a, CHARCODE_z] = 'AZaz'
  .split('')
  .map((_, idx) => 'AZaz'.charCodeAt(idx));

function getFrogTranslatedWord(word) {
  return word.split('').reduce((prevResult, c) => {
    if (isAlphabet(c)) {
      return prevResult + frogTranslate(c);
    }

    return prevResult + c;
  }, '');
}

function isAlphabet(c) {
  return ALPHABET_REGEX.test(c);
}

function frogTranslate(c) {
  const charCode = c.charCodeAt(0);

  if (isLowerCase(charCode)) {
    return String.fromCharCode(CHARCODE_a + CHARCODE_z - charCode);
  }

  return String.fromCharCode(CHARCODE_A + CHARCODE_Z - charCode);
}

function isLowerCase(alphabetCharCode) {
  return alphabetCharCode >= CHARCODE_a;
}

function problem4(word) {
  const answer = getFrogTranslatedWord(word);

  return answer;
}

module.exports = problem4;
