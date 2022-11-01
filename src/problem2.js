function problem2(cryptogram) {
  // 매개변수 배열화 및 stack 배열 선언
  let array = cryptogram.split("");
  let stack = [];

  // 연속된 중복 문자를 제외한 문자를 stack 배열에 담는 for of 문 작성
  for (const el of array) {
    if (el === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(el);
    }
  }

  // 문자열로 변환하여 결과값 산출
  return stack.join("");
}

module.exports = problem2;
