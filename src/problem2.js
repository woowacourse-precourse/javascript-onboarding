class ErrorCase {
  constructor(cryptogram) {
    this.cryptogram = cryptogram;
    this.checkAllError();
  }

  checkLowerCase() {
    return this.cryptogram.match(/[a-z]/g).length === this.cryptogram.length;
  }

  checkLength() {
    return 1 <= this.cryptogram.length && this.cryptogram.length <= 1000;
  }

  checkAllError() {
    if (!(this.checkLength() && this.checkLowerCase())) {
      throw new Error("input 양식에 에러가 발생했습니다!!");
    }
  }
}

class Stack {
  constructor() {
    this._arr = [];
  }

  toString() {
    return this._arr.join("");
  }

  isEmpty() {
    return this._arr.length === 0;
  }

  peek() {
    return this._arr[this._arr.length - 1];
  }

  pop() {
    return this._arr.pop();
  }

  push(value) {
    this._arr.push(value);
  }
}

class Password {
  constructor(cryptogram) {
    new ErrorCase(cryptogram);

    this.stack = new Stack();
    this.cryptogramList = cryptogram.split("");
    this.prevPopValue = "";
  }

  decrypt(char) {
    if (!this.stack.isEmpty() && this.stack.peek() === char) {
      this.stack.pop();
      this.prevPopValue = char;
    } else if (this.prevPopValue !== char) {
      this.stack.push(char);
      this.prevPopValue = "";
    }
  }

  getDecryption() {
    for (let char of this.cryptogramList) {
      this.decrypt(char);
    }

    return this.stack.toString();
  }
}

function problem2(cryptogram) {
  const password = new Password(cryptogram);
  return password.getDecryption();
}

module.exports = problem2;
