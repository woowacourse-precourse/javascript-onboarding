function problem2(cryptogram) {
  const stack = [];
  stack.push(cryptogram[0]);

  for (let i = 1; i < cryptogram.length; i++) {
    const currentElement = cryptogram[i];

    if (stack.length === 0) {
      stack.push(currentElement);
    } else {
      const lastElement = stack[stack.length - 1];

      if (lastElement == currentElement) {
        stack.pop();
      } else {
        stack.push(currentElement);
      }
    }
  }
  return stack.join("");
}

module.exports = problem2;
