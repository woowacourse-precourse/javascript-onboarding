function problem2(cryptogram) {
  const checkConsecutiveChars = /(.)\1+/g;

  if (!checkConsecutiveChars.test(cryptogram)) return cryptogram;

  const cryptedString = cryptogram.replace(checkConsecutiveChars, '');

  return problem2(cryptedString);
}

module.exports = problem2;
