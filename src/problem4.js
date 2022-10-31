function isNotAlphabet(alphabet) {
  const ALPHABET_ASCII_CODE_FIRST = 65;
  const ALPHABET_ASCII_CODE_SECOND = 90;
  const ALPHABET_ASCII_CODE_THIRD = 97;
  const ALPHABET_ASCII_CODE_FOURTH = 122;
  if (alphabet.charCodeAt() < ALPHABET_ASCII_CODE_FIRST) return true;
  if (
    alphabet.charCodeAt() > ALPHABET_ASCII_CODE_SECOND &&
    alphabet.charCodeAt() < ALPHABET_ASCII_CODE_THIRD
  )
    return true;
  if (alphabet.charCodeAt() > ALPHABET_ASCII_CODE_FOURTH) return true;

  return false;
}

function caseSensitive(alphabet) {
  const LOWERCASE_ASCII_NUM = 219;
  const UPPERCASE_ASCII_NUM = 155;
  const CLASSIFYING_ASCII_NUM = 96;
  if (alphabet.charCodeAt() > CLASSIFYING_ASCII_NUM)
    return String.fromCharCode(LOWERCASE_ASCII_NUM - alphabet.charCodeAt());
  if (alphabet.charCodeAt() <= CLASSIFYING_ASCII_NUM)
    return String.fromCharCode(UPPERCASE_ASCII_NUM - alphabet.charCodeAt());
}

function convertAlphabet(alphabet) {
  if (isNotAlphabet(alphabet)) return alphabet;
  return caseSensitive(alphabet);
}

function problem4(word) {
  const convertedAlphabet = word
    .split("")
    .map((alphabet) => convertAlphabet(alphabet));
  return convertedAlphabet.join("");
}

module.exports = problem4;
