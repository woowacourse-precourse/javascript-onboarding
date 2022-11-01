const DUPLICATE_REGEX = /(\w)\1+/g;
const REPLACE_CHAR = "";

const checkDuplicate = (cryptogram) => {
  return DUPLICATE_REGEX.test(cryptogram);
}

const replaceDuplicate = (cryptogram, replaceChar) => {
  return cryptogram.replace(DUPLICATE_REGEX, replaceChar);
}

function problem2(cryptogram) {
  let resultCryptogram = cryptogram;
  while (checkDuplicate(resultCryptogram)) {
    resultCryptogram = replaceDuplicate(resultCryptogram, REPLACE_CHAR);
  }
  return resultCryptogram;
}

module.exports = problem2;