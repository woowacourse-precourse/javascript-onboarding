/**
 * 중복된 문자들은 삭제된 문자열 반환
 * @param {string} str
 * @returns {string} 중복 제거 문자열
 */
function getRemovedRepeatChar(str) {
  return str.replace(/(([a-z])\2{1,})/g, '');
}

/**
 * Returns the decrypt string
 * @param {string} cryptogram
 * @returns {string}
 */
 function problem2(cryptogram) {
  const tempResult = getRemovedRepeatChar(cryptogram);
  if (cryptogram.length === tempResult.length)
    return tempResult;
  return problem2(tempResult);
}

module.exports = problem2;
