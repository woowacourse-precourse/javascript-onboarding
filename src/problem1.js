function problem1(pobi, crong) {
  let Pobi = new ScoreKeeper(pobi);
  let Crong = new ScoreKeeper(crong);

  if (Pobi.isInvalid() || Crong.isInvalid()) {
    return -1;
  }

  const pobiScore = Pobi.getScore();
  const crongScore = Crong.getScore();

  if (pobiScore === crongScore) {
    return 0;
  } else {
    return pobiScore > crongScore ? 1 : 2;
  }
}

class ScoreKeeper {
  constructor(arr) {
    this.leftPage = arr[0];
    this.rightPage = arr[1];
    if (this.leftPage % 2 != 1 || this.leftPage + 1 != this.rightPage) {
      this._invalid = true;
    } else {
      this._invalid = false;
    }
  }

  isInvalid() {
    return this._invalid;
  }

  _computeScore(num) {
    let sum1 = 0,
      sum2 = 1;
    let remainder = 0;

    while (num > 0) {
      remainder = num % 10;
      sum1 += remainder;
      sum2 *= remainder;
      num = Math.trunc(num / 10);
    }

    return sum1 > sum2 ? sum1 : sum2;
  }

  getScore() {
    let a = this._computeScore(this.leftPage);
    let b = this._computeScore(this.rightPage);
    return a > b ? a : b;
  }
}

module.exports = problem1;
