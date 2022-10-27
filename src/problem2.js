function problem2(cryptogram) {
  var answer;
  let stack = [];
  for (let i = 0; i < cryptogram.length; i++) {
    stack.push(cryptogram.slice(i, i + 1));
    if (stack[stack.length - 1] == stack[stack.length - 2]) {
      stack.pop();
      stack.pop();
    }
  }
  answer = stack.join("");
  return answer;
}
module.exports = problem2;
