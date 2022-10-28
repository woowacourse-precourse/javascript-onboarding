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


/**
 * 암호문을 복호화한다.
 * @param {string} cryptogram
 * @param {regex} REGEX
 * @param {string | (match:string)=>string} replacer
 * @returns
 */
 function decrypto(cryptogram, REGEX, replacer) {
  return cryptogram.replace(REGEX, replacer);
}

module.exports = problem2;
