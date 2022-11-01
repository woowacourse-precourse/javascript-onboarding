const problem2 = (cryptogram) => {
  const stack = [];
  let lastPopped = '';

  cryptogram.split('').forEach((char) => {
    if (char === stack[stack.length - 1]) lastPopped = stack.pop();
    if (char !== lastPopped) stack.push(char);
  });

  return stack.join('');
};

module.exports = problem2;
