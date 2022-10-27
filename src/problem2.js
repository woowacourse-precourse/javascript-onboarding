function problem2(cryptogram) {
  let stack = [];
  for (let i of cryptogram) {
    if (stack[stack.length - 1] === i) stack.pop();
    else stack.push(i);
  }
}

module.exports = problem2;
