function problem2(cryptogram) {
  var answer;
  let stack = "";

  for (var char of cryptogram) {
    if (stack.length > 0) {
      if (char == stack[stack.length - 1]) {
        stack = stack.slice(0, -1);
      } else stack += char;
    } else stack += char;
  }
  answer = stack;
  return answer;
}

module.exports = problem2;
