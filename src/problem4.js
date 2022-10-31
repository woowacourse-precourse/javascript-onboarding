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

function caseSensitive(word) {
  const LOWERCASE_ASCII_NUM = 219;
  const UPPERCASE_ASCII_NUM = 155;
  const CLASSIFYING_ASCII_NUM = 96;
  if (word.charCodeAt() > CLASSIFYING_ASCII_NUM)
    return String.fromCharCode(LOWERCASE_ASCII_NUM - word.charCodeAt());
  if (word.charCodeAt() <= CLASSIFYING_ASCII_NUM)
    return String.fromCharCode(UPPERCASE_ASCII_NUM - word.charCodeAt());
}

function convertWord(word) {
  if (isNotWord(word)) return word;
  return caseSensitive(word);
}

function problem4(word) {
  const convertWords = word.split("").map((alphabet) => convertWord(alphabet));
  return convertWords;
}

module.exports = problem4;
