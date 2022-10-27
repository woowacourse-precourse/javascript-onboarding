function eraseConsecutiveChars(str) {
  const stack = [];
  let newStr = "";
  for (const char of str) {
    if (stack.length === 0 || stack[stack.length - 1] === char) {
      stack.push(char);
    } else {
      if (stack.length > 1) {
        while (stack.length > 0) {
          stack.pop();
        }
      } else {
        newStr += stack.pop();
      }
      stack.push(char);
    }
  }
  if (stack.length === 1) {
    newStr += stack.pop();
  }
  return newStr;
}

module.exports = eraseConsecutiveChars;
