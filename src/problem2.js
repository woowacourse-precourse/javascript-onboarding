function problem2(cryptogram) {
  const stack = [];

  for (const ch of cryptogram) {
    if (stack.length && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }

  return stack.join('');
}

module.exports = problem2;
