function problem2(cryptogram) {
  let result = cryptogram;
  while (result.match(/([a-z])\1+/g)) {
    result = result.replace(/([a-z])\1+/g, "");
  }
  return result;
}

module.exports = problem2;
