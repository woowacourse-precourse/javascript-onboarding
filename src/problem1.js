const bookPage = {
  left: 0,
  right: 0,
  inputPages: function (...pages) {
    if (!this.checkPages(pages)) {
      return false;
    }
  },
  checkPages: function (...pages) {
    return pages.length == 2;
  },
};

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
