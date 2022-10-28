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
  allCount369: function (number) {
    for (var i = 1; i <= number; i++) {
      this.count += this.count369(i);
    }
    return this.count;
  },
  count369: function (number) {
    return String(number)
      .split("")
      .reduce((a, b) => (this.is369(b) ? a + 1 : a), 0);
  },
  is369: function (number) {
    return number == 3 || number == 6 || number == 9;
  },
};

function problem3(number) {
  var answer;
  return answer;
}

module.exports = problem3;
