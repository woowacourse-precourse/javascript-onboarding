const problem2 = cryptogram => {
  let isMatched = true;

  while (isMatched) {
    isMatched = false;
    cryptogram = cryptogram.replace(/(.)\1+/g, () => {
      isMatched = true;
      return '';
    });
  }

  return cryptogram;
}

module.exports = problem2;