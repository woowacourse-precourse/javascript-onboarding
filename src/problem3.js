class ErrorCase {
  constructor(number) {
    this.number = number;
    this.checkLimit();
  }

  checkLimit() {
    if (!(1 <= this.number && this.number <= 10000)) {
      throw new Error("input 양식에 에러가 발생했습니다!!");
    }
  }
}

function problem3(number) {
  new ErrorCase(number);
}

/*
  에러 케이스 테스트
  
  problem3(0);
  problem3(10001);
*/

module.exports = problem3;
