function stackIsEmpty(stack, cryptogram, i) {
  // 스택에 아무것도 없다면 연속인지 아닌지 모르므로
  // 스택에 넣어야한다.
  if (stack.length === 0) {
    stack.push(cryptogram[i]);
  }
}

function problem2(cryptogram) {
  // 스택 구조 활용?
  // 스택에 하나씩 담음
  // 스택 가장 위에 있는 값과 현재 담으려는 값이 같다면
  // 스택에서 그 값을 빼고, 담으려는 값도 버려버린다
  // 그게 아니라면 스택에 넣는다
  let stack = [];

  for (let i = 0; i < cryptogram.length; i++) {
    stackIsEmpty(stack, cryptogram, i);
  }
}

module.exports = problem2;
