function solve_cryptogram(str) {
  let stack = [];
  for (let i = 0; i < str.length; ++i) {
    // if the stack is empty, push the charater.
    if (stack.length === 0) {
      stack.push(str[i]);
      continue;
    }
    // if the character is same with the top of stack, delete the top of the stack.
    if (stack[stack.length - 1] === str[i]) {
      stack.pop();
      continue;
    }
    stack.push(str[i]);
  }
  return stack;
}

function problem2(cryptogram) {
  const stack = solve_cryptogram(cryptogram);
  let answer = "";
  for (let char of stack) {
    answer += char;
  }
  return answer;
}

module.exports = problem2;
