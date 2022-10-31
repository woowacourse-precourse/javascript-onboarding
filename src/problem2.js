function problem2(cryptogram) {
  return getDecodedCryptogram(cryptogram);
}

function getDecodedCryptogram(cryptogram) {
  const DUPLICATED_REGEX = /([a-z])\1+/g;
  while (isInDuplicateWord(cryptogram,DUPLICATED_REGEX)) {
    cryptogram = cryptogram.replace(DUPLICATED_REGEX, '');
  }

  return cryptogram;
}

function isInDuplicateWord(cryptogram,DUPLICATED_REGEX){
  return DUPLICATED_REGEX.test(cryptogram)
}
module.exports = problem2;
