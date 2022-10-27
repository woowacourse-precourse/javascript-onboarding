class ErrorCase {
  constructor(money) {
    this.money = money;
    this.checkLimit();
  }

  checkLimit() {
    if (!(1 <= this.money && this.money <= 1000000)) {
      throw new Error("input 양식에 에러가 발생했습니다!!");
    }
  }
}

function problem5(money) {
  new ErrorCase(money);
}

/*
  에러 케이스 테스트 예제
  
  problem5(0);
  problem5(1000001);
*/

module.exports = problem5;
