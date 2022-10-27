function problem2(cryptogram) {
  const stack = [];

  for (let i = 0; i < cryptogram.length; i++) {
    stack.push(cryptogram[i]);

    if (stack[stack.length - 1] == stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.join("");
}

module.exports = problem2;
