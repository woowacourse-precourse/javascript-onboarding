class ErrorCase {
  constructor(number) {
    this.number = number;
    this.checkLimit();
  }

  checkLimit() {
    return 1 <= this.number && this.number <= 10000;
  }
}

const is369 = (num) => {
  return num == 3 || num == 6 || num == 9;
};

function problem3(number) {
  const error = new ErrorCase(number);

  if (!error.checkLimit()) {
    console.log("input 양식이 제한사항에 맞게 주어지지 않았습니다.");
    return;
  }

  return Array.from({ length: number }, (_, i) => i + 1)
    .flatMap((num) => String(num).split(""))
    .filter((num) => is369(num)).length;
}

module.exports = problem3;
