function problem2(cryptogram) {
  return decipher(cryptogram);
}

function decipher(cryptogram) {
  const re = new RegExp(/([a-z])\1+/g);

  return (function internalDecipher(cryptogram) {
    return re.test(cryptogram)
        ? internalDecipher(cryptogram.replace(re, ''))
        : cryptogram;
  })(cryptogram);
}

module.exports = problem2;
