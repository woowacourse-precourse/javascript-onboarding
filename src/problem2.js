function problem2(cryptogram) {
  let stack = [];
  let answer;

  for (var i = 0; i < cryptogram.length; i++) {
    stack.push(cryptogram[i]);
    if (
      stack.length > 1 &&
      stack[stack.length - 1] == stack[stack.length - 2]
    ) {
      stack.pop();
      stack.pop();
    }
  }
  answer = stack.join('');
  return answer;
}

module.exports = problem2;
