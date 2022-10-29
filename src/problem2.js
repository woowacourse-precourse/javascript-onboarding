function problem2(cryptogram) {
  cryptogram = cryptogram.split('');
  const stack = [];

  while (cryptogram.length !== 0) {
    stack.push(cryptogram.shift());
    if (stack[stack.length - 1] === stack[stack.length - 2]) {
      stack.pop();
      if (stack[stack.length - 1] !== cryptogram[0]) stack.pop();
    }

  }

  return stack.join('');
}

module.exports = problem2;
