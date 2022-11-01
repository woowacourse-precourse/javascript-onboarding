function problem2(cryptogram) {
  //길이 제한.
  if (1 <= cryptogram.length <= 1000) {
    //소문자 제한
    cryptogram.toLowerCase();
    //빈 배열
    let stack = [];

    for (let i of cryptogram) {
      //현재값과 스택에있는 값이 일치하면
      //pop으로 배열에서 제거 후 반복으로 이동.
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