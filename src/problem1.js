const bookPage = {
  left: 0,
  right: 0,
  inputPages: function (...pages) {
    if (!this.checkPages(...pages)) {
      return false;
    }
    this.left = pages[0];
    this.right = pages[pages.length - 1];

    return true;
  },
  checkPagesLength: function (...pages) {
    return pages.length == 2;
  },
  checkPagesRage: function (...pages) {
    let passPages = pages.filter((page) => page < 1 && page > 400);
    return passPages.length == 0;
  },
  checkPagesForm: function (...pages) {
    let leftPage = +pages[0];
    let rightPage = +pages[pages.length - 1];
    return leftPage % 2 == 1 && rightPage % 2 == 0;
  },
  checkPagesDistance: function (...pages) {
    let leftPage = +pages[0];
    let rightPage = +pages[pages.length - 1];
    return leftPage - rightPage == 1;
  },
  checkPages: function (...pages) {
    if (!this.checkPagesLength(pages)) {
      return false;
    }
    if (!this.checkPagesRage(pages)) {
      return false;
    }
    if (!this.checkPagesForm(pages)) {
      return false;
    }
    if (!this.checkPagesDistance(pages)) {
      return false;
    }

    return true;
  },
};

function problem1(pobi, crong) {
  var answer;

  let pobiBookPage = new bookPage();
  let crongBookPage = new bookPage();
  pobiBookPage.inputPages(pobi);
  crongBookPage.inputPages(crong);

  return answer;
}

module.exports = problem1;
