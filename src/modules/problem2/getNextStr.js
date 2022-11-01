const getNextChar = require("./getNextChar.js");

function getNextStr(char, newStr, stack) {
  let nextStr = newStr;
  if (!stack.empty() && stack.top() !== char) {
    nextStr += getNextChar(stack);
  }
  return nextStr;
}

module.exports = getNextStr;
