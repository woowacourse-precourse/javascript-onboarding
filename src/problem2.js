function problem2(cryptogram) {
  const duplReg = /(\w)\1+/g;
  let testCrypto = cryptogram;

  while (duplReg.test(testCrypto)) {
    testCrypto = testCrypto.replace(duplReg, '');
  }

  return testCrypto;
}

module.exports = problem2;
