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

    this._cryptogram = cryptogram;
  }

  getUseCharList() {
    return [...new Set(this._cryptogram.split(""))];
  }

  decrypt() {
    const usingCharList = this.getUseCharList();
    let result = this._cryptogram;

    for (const char of usingCharList) {
      const regex = new RegExp(`${char}{2,}`, "g");
      result = result.replace(regex, "");
    }

    return result;
  }

  getDecryption() {
    let decryption = this.decrypt();

    while (decryption.length !== this._cryptogram.length) {
      this._cryptogram = decryption;
      decryption = this.decrypt();
    }

    return decryption;
  }
}

function problem2(cryptogram) {
  const password = new Password(cryptogram);
  return password.getDecryption();
}

module.exports = problem2;
