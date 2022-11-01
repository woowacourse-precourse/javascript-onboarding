class ErrorCase {
  constructor(cryptogram) {
    this._cryptogram = cryptogram;
  }

  checkLowerCase() {
    return this._cryptogram.match(/[a-z]/g).length === this._cryptogram.length;
  }

  checkLength() {
    return 1 <= this._cryptogram.length && this._cryptogram.length <= 1000;
  }

  checkAllError() {
    return this.checkLength() && this.checkLowerCase();
  }
}

class Password {
  constructor(cryptogram) {
    this._cryptogram = cryptogram;
  }

  getUseCharList() {
    return [...new Set(this._cryptogram.split(""))];
  }

  decryptForOverlap() {
    const usingCharList = this.getUseCharList();
    let result = this._cryptogram;

    for (const char of usingCharList) {
      const regex = new RegExp(`${char}{2,}`, "g");
      result = result.replace(regex, "");
    }

    return result;
  }

  getNoOverlapDecryption() {
    let decryption = this.decryptForOverlap();

    while (decryption.length !== this._cryptogram.length) {
      this._cryptogram = decryption;
      decryption = this.decryptForOverlap();
    }

    return decryption;
  }
}

function problem2(cryptogram) {
  const error = new ErrorCase(cryptogram);

  if (!error.checkAllError()) {
    console.log("input 양식이 제한사항에 맞게 주어지지 않았습니다.");
    return;
  }

  const password = new Password(cryptogram);

  return password.getNoOverlapDecryption();
}

module.exports = problem2;
