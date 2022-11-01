function problem2(cryptogram) {
  let stack = [];
  for (let i = 0; i < cryptogram.length; i++) {
    let current = cryptogram[i];
    if (stack.length === 0) {
      stack.push(current);
      continue;
    } else {
      let previous = stack[stack.length - 1];

      if (previous === current) {
        stack.pop();
      } else {
        stack.push(current);
      }
    }
  }
  return stack.join("");
}

module.exports = problem2;
