function problem2(cryptogram) {
  var answer = removeDuplicated(cryptogram);
  return answer;
}

class Stack {
  constructor() {
    this.__data__ = [];
  }
  push(item) {
    this.__data__.splice(0, 0, item);
  }
  pop() {
    return this.__data__.splice(0, 1)[0];
  }
  peek() {
    return this.__data__[0];
  }
  size() {
    return this.__data__.length;
  }
  reverse() {
    return this.__data__.reverse();
  }
}

/**
 * 연속하는 중복 문자들을 모두 제거한다
 * @param {string} word - 입력값 임의의 문자열
 * @returns {string} 연속하는 중복 문자들을 삭제한 문자열
 */
const removeDuplicated = (word) => {
  const stack = new Stack();
  word.split("").forEach((alphabet) => {
    if (stack.size() > 0 && stack.peek() === alphabet) stack.pop();
    else stack.push(alphabet);
  });
  return stack.reverse().join("");
};

module.exports = problem2;
