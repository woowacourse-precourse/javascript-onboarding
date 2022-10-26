function problem2(cryptogram) {
  const cryptogramArr = Array.from(cryptogram);
  const stack = [];
  while (cryptogramArr.length) {
    const cur = cryptogramArr.shift();
    if (stack.length && stack[stack.length - 1] === cur) {
      stack.pop();
      continue;
    }
    stack.push(cur);
  }
  return stack.join("");
}

module.exports = problem2;
