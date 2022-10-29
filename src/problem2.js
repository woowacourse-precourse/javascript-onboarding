function problem2(cryptogram) {
  let answer = "";

  // 문자열을 하나하나 스택에 넣으며 계산.
  let stack = [];
  let index = 0;

  // 모든 문자를 순서대로 스택에 한번씩 넣어봄
  while (index < cryptogram.length) {
    stack.push(cryptogram[index]);
    // 연속두개나오는거있으면 두번 pop(); (stack에 2개이상 들어가있다는 가정 하에.)
    while (
      stack.length >= 2 &&
      stack[stack.length - 2] === stack[stack.length - 1]
    ) {
      stack.pop();
      stack.pop();
    }
    index++;
  }

  answer = stack.join("");
  return answer;
}

module.exports = problem2;
