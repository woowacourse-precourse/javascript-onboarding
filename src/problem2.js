function problem2(cryptogram) {
  const stack = [];
  let prev = "";

  for (const char of cryptogram) {
    const lastChar = stack[stack.length - 1];

    if (char !== lastChar && char !== prev) {
      stack.push(char);
      prev = char;
    } else if (char === lastChar) {
      stack.pop();
    }
  }

  return stack.join("");
}

module.exports = problem2;
