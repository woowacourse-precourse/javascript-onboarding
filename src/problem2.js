const CONTINUOUS_CHAR_REGEX = /([a-z])\1+/g;

/**
 * 암호문 해독 : 연속하는 중복 문자들 제거
 * @param {string} cryptogram
 * @returns {string}
 */
const decryptedCryptogram = (cryptogram) => {
  return cryptogram.replace(CONTINUOUS_CHAR_REGEX, "");
};

/**
 * @param {string} str
 * @returns {boolean}
 */
const checkIsCryptogram = (str) => {
  return str.match(CONTINUOUS_CHAR_REGEX);
};

function problem2(cryptogram) {
  /** @type {string} */
  let res = cryptogram;

  while (checkIsCryptogram(res)) {
    res = decryptedCryptogram(res);
  }

  return res;
}

module.exports = problem2;
