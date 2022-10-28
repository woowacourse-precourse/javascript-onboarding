function problem1(pobi, crong) {
  class Input {
    constructor({ name, leftPage, rightPage }) {
      this.name = name;
      this.leftPage = leftPage;
      this.rightPage = rightPage;
    }
  }
  const Pobi = new Input({
    name: "pobi",
    leftPage: pobi[0],
    rightPage: pobi[1],
  });
  const Crong = new Input({
    name: "crong",
    leftPage: crong[0],
    rightPage: crong[1],
  });

  class IsLeft {
    constructor({ leftPage }) {
      this.leftPage = leftPage;
      console.log("leftpage", this.leftPage);
    }
    IsLeftOdd() {
      if (!this.leftPage / 2) {
        return true;
      }
      return false;
    }
  }

  const IsPobiLeftOdd = new IsLeft(Pobi.leftPage);
  const IsCrongLeftOdd = new IsLeft(Crong.leftPage);

  class IsRight {
    constructor({ rightPage }) {
      this.rightPage = rightPage;
    }
    IsRightEven() {
      if (this.rightPage / 2) {
        return true;
      }
      return false;
    }
  }

  const IsPobiRightEven = new IsRight(Pobi.rightPage);
  const IsCrongRightEven = new IsRight(Crong.rightPage);

  class IsLeftPlusOne {
    constructor({ leftPage, rightPage }) {
      this.leftPage = leftPage;
      this.rightPage = rightPage;
    }
    LeftPlusOne() {
      if (this.leftPage + 1 === this.rightPage) {
        return true;
      }
      return false;
    }
  }

  const IsPobiLeftPlusOne = new IsLeftPlusOne(Pobi.leftPage, pobi.rightPage);
  const IsCrongLeftPlusOne = new IsLeftPlusOne(Crong.leftPage, crong.rightPage);

  class LeftOverPage {
    constructor({ leftPage }) {
      this.leftPage = leftPage;
    }
    IsLeftOverPage() {
      if (this.leftPage > 399 || this.leftPage < 1) {
        return false;
      }
      return true;
    }
  }

  const IsPobiLeftOver = new LeftOverPage(Pobi.leftPage);
  const IsCrongLeftOver = new LeftOverPage(Crong.leftPage);

  class RightOverPage {
    constructor({ rightPage }) {
      this.rightPage = rightPage;
    }
    IsLeftOverPage() {
      if (this.rightPage > 400 || this.rightPage < 2) {
        return false;
      }
      return true;
    }
  }

  const IsPobiRightver = new RightOverPage(Pobi.rightPage);
  const IsCrongRightOver = new RightOverPage(Crong.rightPage);

  if (
    IsPobiLeftOdd ||
    IsCrongLeftOdd ||
    IsPobiRightEven ||
    IsCrongRightEven ||
    IsPobiLeftPlusOne ||
    IsCrongLeftPlusOne ||
    IsPobiLeftOver ||
    IsCrongLeftOver ||
    IsPobiRightver ||
    IsCrongRightOver
  ) {
    return -1;
  }

  class DigitMaker {
    constructor({ page }) {
      this.page = page;
    }
    SeperateDigit() {
      let temp = this.page;
      const Digits = [];
      while (temp > 0) {
        Digits.push(temp % 10);
        temp /= 10;
      }
      return Digits;
    }
  }

  const PobiLeftDigits = new DigitMaker(Pobi.leftPage);
  const PobiRightDigits = new DigitMaker(Pobi.rightPage);
  const CrongLeftDigits = new DigitMaker(Crong.leftPage);
  const CrongRightDigits = new DigitMaker(Crong.rightPage);

  class ScoreMaker {
    constructor({ digits }) {
      this.digits = digits;
    }
    CalculateScore() {
      return Math.max(
        this.digits.reduce((a, b) => a + b),
        this.digits.reduce((a, b) => a * b)
      );
    }
  }

  const PobiScore = Math.max(
    new ScoreMaker(PobiLeftDigits),
    new ScoreMaker(PobiRightDigits)
  );
  const CrongScore = Math.max(
    new ScoreMaker(CrongLeftDigits),
    new ScoreMaker(CrongRightDigits)
  );

  class WhoIsWinner {
    constructor({ pobiscore, crongscore }) {
      this.pobiscore = pobiscore;
      this.crongscore = crongscore;
    }
    CompareScore() {
      if (this.pobiscore > this.crongscore) {
        return 1;
      }
      if (this.pobiscore < this.crongscore) {
        return 2;
      }
      if (this.pobiscore === this.crongscore) {
        return 0;
      }
    }
  }

  const answer = new WhoIsWinner(PobiScore, CrongScore);

  return answer;
}

module.exports = problem1;
