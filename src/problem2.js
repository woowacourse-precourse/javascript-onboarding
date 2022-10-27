function problem2(cryptogram) {
  var answer;

  const stack = [];
  let top = '';
  let previous = '';

  for (const alphabet of cryptogram) {
    if (stack.length === 0 || top !== alphabet) {
      stack.push(alphabet);
      top = alphabet;
      continue;
    }
    if (previous === alphabet) continue;
    previous = stack.pop();
    top = stack[stack.length - 1];
  }

  return answer;
}

module.exports = problem2;
