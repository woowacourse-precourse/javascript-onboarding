const Game369 = {
  endNumber: 0,
  inputEndNumber: function (number) {
    if (!this.checkNumber(number)) {
      return false;
    }
    this.endNumber = number;
  },
  checkNumber: function (number) {
    return number >= 1 && number <= 100000;
  },
  allCount369: function () {
    let count = 0;
    for (var i = 1; i <= this.endNumber; i++) {
      count += this.count369(i);
    }
    return count;
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
  const game369 = Object.assign({}, Game369);
  game369.inputEndNumber(number);
  return game369.allCount369();
}

module.exports = problem3;
