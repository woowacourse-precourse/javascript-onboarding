function problem2(cryptogram) {
  var answer;
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

const removeDuplicated = (word) => {
  const stack = new Stack();
  word.split("").forEach((alphabet) => {
    if (stack.size() > 0 && stack.peek() === alphabet) stack.pop();
    else stack.push(alphabet);
  });
  return stack.reverse();
};

module.exports = problem2;
