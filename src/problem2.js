function problem2(cryptogram) {
  const CRYPTOGRAM_REGEX = /^[a-z]{1,1000}&/;
  const isValidCryptogram = (cryptogram) => {
    return CRYPTOGRAM_REGEX.test(cryptogram);
  };

  const decryptCryptogram = (cryptogram) => {
    const removedRepeat = removeRepeat(cryptogram);

    if (isDecryptoRecursiveBaseCase(cryptogram, removedRepeat)) {
      return removedRepeat;
    }

    return decryptCryptogram(removedRepeat);
  };

  const isDecryptoRecursiveBaseCase = (cryptogram, removedRepeat) => {
    return removedRepeat === cryptogram || removedRepeat.length === 0;
  };

  const removeRepeat = (cryptogram) => {
    const repeatRegex = /([a-z])\1{1,}/g;
    return cryptogram.replace(repeatRegex, '');
  };

  if (isValidCryptogram(cryptogram)) {
    throw new Error('1이상 1000이하의 영어 소문자만 입력 가능합니다.');
  }

  return decryptCryptogram(cryptogram);
}

module.exports = problem2;
