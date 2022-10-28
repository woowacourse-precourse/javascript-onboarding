/**
 * PROBLEM 2
 * @param {string} cryptogram
 * @returns {string} decrypted string
 */
function problem2(cryptogram) {
  const REGEX = /(.)\1{1,}/g;
  let decrypted = cryptogram;
  while (isCryptoGram(decrypted, REGEX)) {
    decrypted = decrypto(decrypted, REGEX, "");
  }
  return decrypted;
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
 * @param {Regex} regex
 * @param {string | (match:string)=>string} replacer
 * @returns
 */
function decrypto(cryptogram, regex, replacer) {
  return cryptogram.replace(regex, replacer);
}

module.exports = problem2;
