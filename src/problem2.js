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

class Password {
  constructor(cryptogram) {
    new ErrorCase(cryptogram);

    this.cryptogramList = cryptogram.split("");
  }

  decrypt() {
    let prevPopValue = "";
    const stack = [];

    for (let char of this.cryptogramList) {
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
        prevPopValue = char;
      } else if (prevPopValue === char) {
        continue;
      } else {
        stack.push(char);
        prevPopValue = "";
      }
    }

    return stack.join("");
  }
}

function problem2(cryptogram) {
  const password = new Password(cryptogram);
  return password.decrypt();
}

module.exports = problem2;
