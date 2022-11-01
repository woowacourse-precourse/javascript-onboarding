function problem2(cryptogram) {
  var answer;
  let n = cryptogram;
  let stack = [];
  let cur;

  for (cur of n) {
    if (cur === stack[stack.length - 1]) {
      stack.pop();
      continue;
    }
    stack.push(cur);
  }

  answer = stack.join("");
  return answer;
}

module.exports = problem2;
