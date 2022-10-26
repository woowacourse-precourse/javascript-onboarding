const bookPage = {
  left: 0,
  right: 0,
  inputPages: function (...pages) {
    if (this.checkPages(pages)) {
      return false;
    }
  },
  checkPages: function (...pages) {
    if (pages.length != 2) {
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
