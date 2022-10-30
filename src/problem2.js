function problem2(cryptogram) {
  const pattern = /(.)\1{1,}/g;
  let result = cryptogram;
  while (isRepeat(result, pattern)) {
    result = decode(result, pattern);
  }
  return result;
  function isRepeat(string, pattern) {
    return pattern.test(string);
  }
  function decode(crpytogram, pattern) {
    return crpytogram.replace(pattern, "");
  }
}

module.exports = problem2;
