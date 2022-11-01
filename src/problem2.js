function problem2(cryptogram) {
  let result = cryptogram;
  let prev = '';

  while (prev !== result) {
    prev = result;
    result = removeAllAdjacent(result);
  }

  return result;
}

function removeAllAdjacent(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string.charAt(i) === string.charAt(i + 1)) {
      while (string.charAt(i) === string.charAt(i + 1)) {
        i += 1;
      }
    } else {
      result += string.charAt(i);
    }
  }

  return result;
}

module.exports = problem2;
