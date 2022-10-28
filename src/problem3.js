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

const is369 = (num) => {
  return num == 3 || num == 6 || num == 9;
};

function problem3(number) {
  new ErrorCase(number);

  return Array.from({ length: number }, (_, i) => i + 1)
    .flatMap((num) => String(num).split(""))
    .filter((num) => is369(num)).length;
}

module.exports = problem3;
