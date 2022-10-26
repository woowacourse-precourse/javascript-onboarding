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

function problem2(cryptogram) {
  new ErrorCase(cryptogram);
  return;
}

/*
  console.log(problem2("Aasdfasdf")); // 알파벳 대문자가 있을 때
  console.log(problem2("1dsakjfas")); // 문자열에 숫자가 있을 때
  console.log(problem2("dsak akds")); // 문자열에 띄어쓰기가 있을 때
  console.log(problem2("#$!aaa")); // 문자열에 소문자 외 문자가 있을 때
*/

module.exports = problem2;
