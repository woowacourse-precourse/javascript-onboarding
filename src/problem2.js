function problem2(cryptogram) {
  //연산
  const crypto = cryptogram.split('');
  let stack = [];

  //기능목록 1-1 구현
  crypto.forEach(text => {
    if (stack[stack.length - 1] === text) {
      stack.pop();
    } else {
      stack.push(text);
    }
  });

  let answer;
  answer = stack.join('');
  return answer;
}

module.exports = problem2;
