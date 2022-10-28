class PageError {
  constructor(pobi, crong) {
    this.pobi = pobi;
    this.crong = crong;
  }

  checkLimit() {
    return [...this.pobi, ...this.crong].every(
      (page) => 1 < page && page < 400
    );
  }

  checkNext() {
    return [this.pobi, this.crong].every(
      ([leftPage, rightPage]) =>
        rightPage - leftPage === 1 && leftPage % 2 === 1
    );
  }

  checkLength() {
    return [this.pobi, this.crong].every((book) => book.length === 2);
  }

  checkAllError() {
    if (!this.checkLength())
      throw new Error("input 양식에 에러가 발생하였습니다!");

    return this.checkLimit() && this.checkNext();
  }
}

class Calculator {
  constructor(pobi, crong) {
    this.pobi = pobi;
    this.crong = crong;
  }

  compareTwoBook() {
    const pobiBigestNumber = this.getBigestNumber(this.pobi);
    const crongBigestNumber = this.getBigestNumber(this.crong);

    if (pobiBigestNumber > crongBigestNumber) {
      return 1;
    } else if (pobiBigestNumber < crongBigestNumber) {
      return 2;
    } else {
      return 0;
    }
  }

  splitNum(page) {
    return String(page)
      .split("")
      .map((num) => Number(num));
  }

  plusPage(page) {
    return this.splitNum(page).reduce((acc, cur) => acc + cur, 0);
  }

  multiPage(page) {
    return this.splitNum(page).reduce((acc, cur) => acc * cur, 1);
  }

  getBigestNumber(book) {
    return Math.max(
      ...book.flatMap((page) => [this.plusPage(page), this.multiPage(page)])
    );
  }
}

function problem1(pobi, crong) {
  const pageError = new PageError(pobi, crong);
  if (!pageError.checkAllError()) return -1;

  const calculator = new Calculator(pobi, crong);
  return calculator.compareTwoBook();
}

module.exports = problem1;
