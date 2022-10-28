function problem2(cryptogram) {
}

/**
 * cryptoGram인지 판단
 * @param {string} string
 * @param {Regex} regex
 * @returns {Boolean} boolean
 */
 function isCryptoGram(string, regex) {
  return regex.test(string);
}

module.exports = problem2;
