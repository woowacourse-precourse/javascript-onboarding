function problem2(cryptogram) {
  const answer = deleteString(cryptogram);
  return arrayToString(answer);
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

function arrayToString(array) {
  // array에서 문자열로 바꾸는 함수.
  let string = "";
  for (const item of array) {
    string += item;
  }

  return string;
}

module.exports = problem2;
