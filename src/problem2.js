function problem2(cryptogram) {
  // 예외사항 1. 길이가 1보다 작거나 1000보다 클 수 없다.
  if (cryptogram.length < 1 || cryptogram.length > 1000) {
    return -1;
  }
  // 예외사항 2. 알파벳 소문자 이외에는 올 수 없다. (정규표현식 사용)
  if (/[^a-z]/.test(cryptogram)) {
    return -1;
  }

  // 스택을 첫번째 문자로 초기화한다.
  const stack = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    // 스택에 들어있는 값과 다음 들어갈 값을 비교한다.
    if (cryptogram[i] === stack[stack.length - 1]) {
      // 값이 같다면 pop 하고 넘어간다.
      stack.pop();
      continue;
    }
    // 값이 다르다면 값을 stack에 쌓고 반복한다.
    stack.push(cryptogram[i]);
  }

  // 값을 스택에 전부 쌓았으면 배열을 문자열로 반환한다. 요소들을 이어준다. 스택을 반환한다.
  return stack.join("");
}

module.exports = problem2;
