class LetterPairDeletingStack {
  constructor() {
    this.stack = [null]; // Placeholder for safer peek
  }

  peekOrNull() {
    return this.stack[this.stack.length - 1];
  }

  push(letter) {
    if (this.peekOrNull() === letter) {
      this.stack.pop();
    } else {
      this.stack.push(letter);
    }
  }

  toString() {
    return this.stack.slice(1).join("");
  }
}

module.exports = {
  LetterPairDeletingStack,
};
