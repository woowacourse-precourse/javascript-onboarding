function problem2(cryptogram) {
  let answer;
  let stack = [];

  //연산
  //기능목록 1-1 구현
  for (let text of cryptogram) {
    //기능목록 1-2 구현
    if (stack[stack.length - 1] === text) stack.pop();
    else stack.push(text);
  }

  answer = stack.join("");
  return answer;
}

module.exports = problem2;
