const BookPage = {
  left: 0,
  right: 0,
  inputPages: function (pages) {
    if (!this.checkPages(pages)) {
      return false;
    }
    this.left = pages[0];
    this.right = pages[pages.length - 1];

    return true;
  },
  checkPagesLength: function (pages) {
    return pages.length == 2;
  },
  checkPagesRage: function (pages) {
    let passPages = pages.filter((page) => page < 1 && page > 400);
    return passPages.length == 0;
  },
  checkPagesForm: function (pages) {
    let leftPage = +pages[0];
    let rightPage = +pages[pages.length - 1];
    return leftPage % 2 == 1 && rightPage % 2 == 0;
  },
  checkPagesDistance: function (pages) {
    let leftPage = +pages[0];
    let rightPage = +pages[pages.length - 1];
    return leftPage - rightPage == -1;
  },
  checkPages: function (pages) {
    return (
      this.checkPagesLength(pages) &&
      this.checkPagesRage(pages) &&
      this.checkPagesForm(pages) &&
      this.checkPagesDistance(pages)
    );
  },
  getMulDigits: function (number) {
    let splitedNumber = String(number).split("");
    return splitedNumber.reduce((a, b) => +a * +b, 1);
  },
  getAddDigits: function (number) {
    let splitedNumber = String(number).split("");
    return splitedNumber.reduce((a, b) => +a + +b, 0);
  },
  getBiggestNumber: function () {
    let getLeftBiggestNumber = Math.max(
      this.getMulDigits(this.left),
      this.getAddDigits(this.left)
    );
    let getRightBiggestNumber = Math.max(
      this.getMulDigits(this.right),
      this.getAddDigits(this.right)
    );
    return Math.max(getLeftBiggestNumber, getRightBiggestNumber);
  },
};

function problem1(pobi, crong) {
  let pobiBookPage = Object.assign({}, BookPage);
  let crongBookPage = Object.assign({}, BookPage);

  if (!pobiBookPage.inputPages(pobi)) {
    return -1;
  }
  if (!crongBookPage.inputPages(crong)) {
    return -1;
  }
  let pobiBigestNumber = +pobiBookPage.getBiggestNumber();
  let crongBigestNumber = +crongBookPage.getBiggestNumber();

  if (pobiBigestNumber == crongBigestNumber) {
    return 0;
  }
  return pobiBigestNumber > crongBigestNumber ? 1 : 2;
}

module.exports = problem1;
