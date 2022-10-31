function problem2(cryptogram) {
  let answer;
  answer = deleteString(cryptogram);
  return answer;
}

function deleteString(cryptogram) {
  // 중복된 문자 삭제하는 메서드
  let stackS = [];

  for (const item of cryptogram) {
    // stack으로 암호문 축약시키기.
    if (stackS && stackS[stackS.length - 1] === item) stackS.pop();
    else stackS.push(item);
  }

  return stackS;
}

module.exports = problem2;
