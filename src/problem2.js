function problem2(cryptogram) {
  const CRYPTOGRAM_REGEX = /^[a-z]{1,1000}&/;
  const isValidCryptogram = (cryptogram) => {
    return CRYPTOGRAM_REGEX.test(cryptogram);
  };

  if (isValidCryptogram(cryptogram)) {
    throw new Error('1이상 1000이하의 영어 소문자만 입력 가능합니다.');
  }

  const decryptCryptogram = (cryptogram) => {
    if (cryptogram.length === 0) return cryptogram;
    const decrypted = [];
    let currentCharacter = '';
    let isRepeated = false;
    [...cryptogram].forEach((character) => {
      if (!isRepeated) {
        currentCharacter = decrypted.pop() || '';
      }

      if (currentCharacter === character) {
        isRepeated = true;
      } else {
        if (!isRepeated) {
          decrypted.push(currentCharacter);
        }
        decrypted.push(character);
        isRepeated = false;
      }
    });
    const decryptogram = decrypted.join('');

    if (decryptogram === cryptogram) {
      return cryptogram;
    }
    return decryptCryptogram(decryptogram);
  };

  return decryptCryptogram(cryptogram);
}

module.exports = problem2;
