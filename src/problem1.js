class PageError {
  constructor(pobi, crong) {
    this._pobi = pobi;
    this._crong = crong;
  }

  checkLimit() {
    return [...this._pobi, ...this._crong].every(
      (page) => 1 < page && page < 400
    );
  }

  checkNext() {
    return [this._pobi, this._crong].every(
      ([leftPage, rightPage]) =>
        rightPage - leftPage === 1 && leftPage % 2 === 1
    );
  }

  checkLength() {
    return [this._pobi, this._crong].every((book) => book.length === 2);
  }

  checkAllError() {
    return this.checkLimit() && this.checkNext() && this.checkLength();
  }
}

class Calculator {
  constructor(pobi, crong) {
    this._pobi = pobi;
    this._crong = crong;
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

  answerWhoWin(pobiNum, crongNum) {
    if (pobiNum === crongNum) return 0;

    return pobiNum > crongNum ? 1 : 2;
  }

  compareTwoBook() {
    return this.answerWhoWin(
      this.getBigestNumber(this._pobi),
      this.getBigestNumber(this._crong)
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
