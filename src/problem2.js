function problem2(cryptogram) {
  const pattern = /(.)\1{1,}/g;
  let result = cryptogram;
  while (isRepeat(result, pattern)) {
    return;
  }
  function isRepeat(string, pattern) {
    return pattern.test(string);
  }
}

module.exports = problem2;
