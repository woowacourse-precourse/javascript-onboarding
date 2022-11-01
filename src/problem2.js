function problem2(cryptogram) {
  var answer;
  let stack = [];
  for (let x of cryptogram) {
    if (stack.length == 0) stack.push(x);
    else {
      if (stack[stack.length - 1] == x) {
        while (stack.length != 0 && stack[stack.length - 1] == x) stack.pop();
      } else {
        stack.push(x);
      }
    }
  }
  answer = stack.join("");
  return answer;
}

module.exports = problem2;
