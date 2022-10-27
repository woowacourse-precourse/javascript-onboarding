function problem2(cryptogram) {
  var answer;

  const stack = [];
  let top = '';

  for (const alphabet of cryptogram) {
    if (stack.length === 0) {
      stack.push(alphabet);
      top = alphabet;
      continue;
    }
  }

  return answer;
}

module.exports = problem2;
