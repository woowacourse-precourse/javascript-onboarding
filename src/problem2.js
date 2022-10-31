function problem2(cryptogram) {
  const result = [];

  for (let char of cryptogram) {
    if (result.at(-1) === char) {
      result.pop();
    }
    result.push(char);
  }
}

module.exports = problem2;
