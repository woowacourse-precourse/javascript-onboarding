function problem2(cryptogram) {
  var answer = "";
  let stack = [cryptogram[0]];
  // 입력된 문자를 하니씩 읽고 해당 문자와 stack의 마지막 문자와 같은지 확인. 같으면 pop, 다르면 push
  for (let i = 1; i < cryptogram.length; i++) {
    if (cryptogram[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(cryptogram[i]);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    answer += stack[i];
  }
  return answer;
}
module.exports = problem2;
