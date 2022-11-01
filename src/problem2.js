function problem2(cryptogram) {

  // 제한사항 : cryptogram은 길이가 1 이상 1000 이하인 문자열이다.
  if (1 <= cryptogram.length <= 1000) {
    // 제한사항 : cryptogram은 알파벳 소문자로만 이루어져 있다.
    cryptogram.toLowerCase();
    // 빈 배열
    let stack = [];
    for (let i of cryptogram) {
      /*현재값과 스택에있는 값이 일치하면
      pop으로 배열에서 제거 후 반복으로 이동. */
      if (i === stack[stack.length - 1]) {
        stack.pop();
        continue;
      }
      //모든 문자열 스택에 푸쉬.
      stack.push(i);
    }
    //배열 -> string
    return stack.join("");;
  }
}

module.exports = problem2;
