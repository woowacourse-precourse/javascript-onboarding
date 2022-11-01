const Stack = require("./stack.js");
const getNextStr = require("./getNextStr.js");

function eraseConsecutiveChars(str) {
  let newStr = "";
  const stack = new Stack();
  for (const char of str) {
    newStr = getNextStr(char, newStr, stack);
    stack.push(char);
  }
  newStr = getNextStr("", newStr, stack);
  return newStr;
}

module.exports = eraseConsecutiveChars;
