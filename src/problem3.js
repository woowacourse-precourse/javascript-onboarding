const game369 = {
  endNumber: 0,
  count: 0,
  inputEndNumber: function (number) {
    if (!this.checkNumber(number)) {
      return false;
    }
    this.endNumber = number;
  },
  checkNumber: function (number) {
    return number >= 1 && number <= 100000;
  },
};

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
