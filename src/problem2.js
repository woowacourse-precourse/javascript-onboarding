function problem2(cryptogram) {
  let answer;
  let stack = [];
  let deletedWord = "";

  for (let i = 0; i < cryptogram.length; i++) {
    while (stack.length && stack[stack.length - 1] === cryptogram[i]) {
      deletedWord = stack.pop();
    }

    if (deletedWord !== cryptogram[i]) {
      stack.push(cryptogram[i]);
      deletedWord = "";
    }
  }

  answer = stack.join("");
  return answer;
}

module.exports = problem2;

/**
 * Stack 사용
 *
 *  1) 문자열 순회하며 stack에 push
 *  2) stack의 제일 끝 문자 === 현재 문자이면 stack.pop()
 *  3) stack에서 pop된 경우 현재 문자도 stack에 추가하면 안됨 - duplicate 변수 추가
 *  4) duplicate === false인 경우에만 stack에 추가
 *  5) answer = stack.join("")
 *    => 'zyellleyz'처럼 문자가 홀수 번 반복되면 제거되지 않는 케이스 발생
 *
 *  3) stack에서 pop된 문자를 deletedWord에 할당
 *  4) deletedWord !== cryptogram[i]인 경우에만 stack에 추가하며, deletedWord = ''으로 재할당
 */
