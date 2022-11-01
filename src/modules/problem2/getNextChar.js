function getNextChar(stack) {
  const stackSize = stack.size();
  const stackTop = stack.top();
  stack.clear();
  if (stackSize > 1) return "";
  return stackTop;
}

module.exports = getNextChar;
