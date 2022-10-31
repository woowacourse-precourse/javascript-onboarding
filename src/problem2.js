function problem2(cryptogram) {
  const duplicateWord = /([a-z])\1+/g;

  while (duplicateWord.test(cryptogram)) cryptogram = cryptogram.replace(duplicateWord, '');

  return cryptogram;
}

module.exports = problem2;
