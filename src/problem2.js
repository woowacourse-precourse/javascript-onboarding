// @ts-check

/**
 *
 * @param {string} cryptogram 중복 문자들이 포함된 문자열
 * @returns {string} 중복 문자들을 삭제한 문자열
 */

function problem2(cryptogram) {
  const regex = /([a-z])\1+/g;

  while (cryptogram.match(regex)) {
    cryptogram = cryptogram.replace(regex, "");
  }

  return cryptogram;
}

module.exports = problem2;
