function problem2(cryptogram) {
  const stack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    const curr = cryptogram[i];

    if (stack.length === 0) {
      stack.push(curr);
    } else {
      const prev = stack[stack.length - 1];

      if (prev === curr) {
        stack.pop();
      } else {
        stack.push(curr);
      }
    }
  }
  return stack.join("");
}

module.exports = problem2;
