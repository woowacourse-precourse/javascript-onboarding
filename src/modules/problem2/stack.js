class Stack {
  constructor() {
    this.stack = [];
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    return this.stack.pop(value);
  }
  empty() {
    return this.stack.length === 0 ? true : false;
  }
  top() {
    if (this.empty()) {
      throw new Error("stack is empty");
    }
    return this.stack[this.stack.length - 1];
  }
  size() {
    return this.stack.length;
  }
  clear() {
    while (!this.empty()) {
      this.stack.pop();
    }
  }
}

module.exports = Stack;
