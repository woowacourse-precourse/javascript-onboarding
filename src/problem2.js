function problem2(cryptogram) {
  let result = cryptogram;
  for (let i = 0; i < result.length; i++) {
    if (result[i] === result[i + 1])
      return problem2(result.substring(0, i) + result.substring(i + 2));
  }
  return result;
}

module.exports = problem2;
