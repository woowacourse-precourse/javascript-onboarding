function problem2(cryptogram) {
  let regexp = /(\w)\1+/g;
  if (regexp.test(cryptogram)) {
    const result = cryptogram.replace(regexp, '');
    return problem2(result);
  } else {
    return cryptogram;
  }
}

module.exports = problem2;
