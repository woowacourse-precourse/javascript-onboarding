function problem2(cryptogram) {
  const isLowerCase = (cryptogram) => {
    const check = cryptogram.replace(/[^a-z]/, '');
    return cryptogram === check;
  };

  if (
    !(cryptogram.length >= 1 && cryptogram.length <= 1000) ||
    !isLowerCase(cryptogram)
  ) {
    throw new Error(
      'cryptogram은 길이가 1이상이고 1000이하인 소문자 알파벳 문자열이어야한다'
    );
  }

  const decrypto = (cryptogram) => {
    if (cryptogram.length === 0) return cryptogram;
    const decrypted = [];
    let pointer = '';
    let isContinious = false;
    [...cryptogram].forEach((character) => {
      if (!isContinious) {
        pointer = decrypted.pop() || '';
      }

      if (pointer === character) {
        isContinious = true;
      } else {
        if (!isContinious) {
          decrypted.push(pointer);
        }
        decrypted.push(character);
        isContinious = false;
      }
    });
    const decryptogram = decrypted.join('');

    if (decryptogram === cryptogram) {
      return cryptogram;
    }
    return decrypto(decryptogram);
  };

  return decrypto(cryptogram);
}

module.exports = problem2;
