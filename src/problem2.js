function problem2(cryptogram) {
  // 스택처럼 문자를 저장할 배열
  const stack = [];

  for (let i = 0; i < cryptogram.length; i++) {
    // 스택의 맨 위 글자와 같은 글자가 들어오는 경우
    if (stack.length > 0 && stack[stack.length - 1] === cryptogram.charAt(i)) {
      // 계속해서 같은 글자는 모두 지워버린다
      while (i < cryptogram.length && stack[stack.length - 1] === cryptogram.charAt(i))
        i++;
      // 중복되었으므로, 스택에서도 제거해준다
      stack.pop();

      // 이후 for문에 의해 i++이 자동으로 되므로, i 하나 떨어트리기
      i--;
    }

    // 그 외에는 정상적으로 들어옴()
    else stack.push(cryptogram.charAt(i));
  }

  // 모인 문자 모아서 반환
  return stack.join("");
}

module.exports = problem2;