const regex = /([a-z])\1+/g;

const problem2 = (cryptogram) => {
  let copiedCryptogram = cryptogram;
  while (regex.test(copiedCryptogram)) {
    copiedCryptogram = copiedCryptogram.replaceAll(regex, '');
  }
  return copiedCryptogram;
}

module.exports = problem2;
