class Exception {
  constructor(pobi, crong) {
    this.pobi = pobi;
    this.crong = crong;
  }
  check() {
    return this.isException(this.pobi) || this.isException(this.crong);
  }

  isException(target) {
    return this.isAllowLength(target) || this.isAllowPage(target);
  }

  isAllowLength(target) {
    return target.length !== 2;
  }

  isAllowPage(target) {
    const [leftPage, rightPage] = target;

    return rightPage - leftPage !== 1;
  }
}

class Calculator {
  constructor(pobi, crong) {
    this.pobi = pobi;
    this.crong = crong;
  }

  compareScore() {
    const pobiScore = this.getScore(this.pobi);
    const crongScore = this.getScore(this.crong);
    if (pobiScore > crongScore) return 1;
    if (pobiScore < crongScore) return 2;

    return 0;
  }

  getScore(target) {
    let score = 0;
    target.forEach((page) => {
      score = Math.max(this.plus(page), this.multiply(page), score);
    });

    return score;
  }

  plus(target) {
    let cnt = 0;
    String(target)
      .split("")
      .forEach((num) => (cnt += +num));

    return cnt;
  }

  multiply(target) {
    let cnt = 1;
    String(target)
      .split("")
      .forEach((num) => (cnt *= +num));

    return cnt;
  }
}

function problem1(pobi, crong) {
  const exception = new Exception(pobi, crong);
  if (exception.check()) return -1;
  const calculator = new Calculator(pobi, crong);

  return calculator.compareScore();
}

module.exports = problem1;
