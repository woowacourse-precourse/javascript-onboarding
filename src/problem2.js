function problem2(cryptogram) {
  let answer;
  let stack = [];
  for (const s of cryptogram) {
    // 문자 s가 문자열의 첫 문자이거나 앞 문자와 다른 문자면 stack배열에 push한다
    if (stack.length === 0 || stack[stack.length - 1] !== s) stack.push(s);
    // 문자 s가 앞 문자와 같은 문자면 stack배열에서 pop한다.
    else stack.pop();
  }
  // stack은 배열이므로 문자열로 만들어서 return한다.
  answer = stack.join("");
  return answer;
}

module.exports = problem2;
