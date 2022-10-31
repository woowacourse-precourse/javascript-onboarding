function solve_cryptogram(str) {
  let stack = [];
  for (let i = 0; i < str.length; ++i) {
    // if the stack is empty, push the charater.
    if (stack.length === 0) {
      stack.push(str[i]);
      continue;
    }
    // If the character is same with the top of stack, delete the duplicated characters
    if (stack[stack.length - 1] === str[i]) {
      for (let j = i + 1; j < str.length; ++j) {
        if (str[i] === str[j]) {
          continue;
        } else if (str[i] !== str[j]) {
          i = j - 1;
          break;
        }
      }
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
