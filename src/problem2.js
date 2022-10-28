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
 */
