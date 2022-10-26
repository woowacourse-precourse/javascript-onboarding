const bookPage = {
  left: 0,
  right: 0,
  inputPages: function (...pages) {
    if (!this.checkPages(...pages)) {
      return false;
    }
  },
  checkPagesLength: function (...pages) {
    return pages.length == 2;
  },
  checkPagesRage: function (...pages) {
    let passPages = pages.filter((page) => page < 1 && page > 400);
    return passPages.length == 0;
  },
  checkPages: function (...pages) {
    if (!this.checkPagesLength(pages)) {
      return false;
    }
    if (!this.checkPagesRage(pages)) {
      return false;
    }
    return true;
  },
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
