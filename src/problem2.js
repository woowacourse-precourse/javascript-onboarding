function problem2(cryptogram) {
  while (true) {
    if (cryptogram.search(/(\w)\1+/g) == -1) break;
    cryptogram = cryptogram.replace(/(\w)\1+/g, "");
  }

  return cryptogram;
}

module.exports = problem2;
