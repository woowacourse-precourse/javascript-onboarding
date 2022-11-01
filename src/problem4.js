//@ts-check

/**
 * 입력한 문자에 반대 문자를 반환한다.
 * @param {string} char 
 * @returns {string} reversed character
 */
function getReversedChar(char) {
  const ascii = char.charCodeAt(0);
  if (ascii >= 97 && ascii <= 122)
    return String.fromCharCode(97 + 97 + 25 - ascii);
  else if (ascii >= 65 && ascii <= 90)
    return String.fromCharCode(65 + 65 + 25 - ascii);
  else
    return char;
}

/**
 * 입력한 문자열의 청개구리 문자열을 반환한다.
 * @param {string} word
 * @returns {string} reversed word
 */
function problem4(word) {
  return word
    .split("")
    .map(getReversedChar)
    .join("");
}

module.exports = problem4;
