function problem2(cryptogram) {
  const result = [];

  for (let char of cryptogram) {
    if (result.length === 0) {
      result.push(char);
    }
    else {
      if (result.at(-1) === char) {
        result.pop();
      }
      else {
        result.push(char);
      }
    }
  }
}

module.exports = problem2;
