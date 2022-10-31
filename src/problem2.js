function problem2(cryptogram) {
  const regExp = /([a-z])\1+/g;

  while (true) {
    const cryptogramLength = cryptogram.length;
    cryptogram = cryptogram.replace(regExp, '');
    if (cryptogram.length === cryptogramLength) break;
  }

  return cryptogram;
}

module.exports = problem2;
