function problem2(cryptogram) {
  let answer;
  let stack = [];

  for (const i of cryptogram) {
    if (stack.length === 0 || stack[stack.length - 1] !== i) stack.push(i);
    else if (stack[stack.length - 1] === i) stack.pop();
  }

  answer = stack.join("");
  return answer;
}

module.exports = problem2;
