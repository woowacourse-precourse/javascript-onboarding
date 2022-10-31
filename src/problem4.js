function isNotWord(word) {
  const WORD_ASCII_CODE_FIRST = 65;
  const WORD_ASCII_CODE_SECOND = 90;
  const WORD_ASCII_CODE_THIRD = 97;
  const WORD_ASCII_CODE_FOURTH = 122;
  if (word.charCodeAt() < WORD_ASCII_CODE_FIRST) return true;
  if (
    word.charCodeAt() > WORD_ASCII_CODE_SECOND &&
    word.charCodeAt() < WORD_ASCII_CODE_THIRD
  )
    return true;
  if (word.charCodeAt() > WORD_ASCII_CODE_FOURTH) return true;

  return false;
}

function convertWord(word) {
  if (isNotWord(word)) return word;
  return;
}

function problem4(word) {
  const convertWords = word.split("").map((alphabet) => convertWord(alphabet));
  return convertWords;
}

module.exports = problem4;
