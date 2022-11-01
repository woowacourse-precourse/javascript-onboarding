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
    constructor(leftPage) {
      this.leftPage = leftPage;
    }

    IsLeftOdd() {
      if (this.leftPage % 2 !== 0) {
        return true;
      }
      return false;
    }
  }

  const IsPobiLeftOdd = new IsLeft(Pobi.leftPage).IsLeftOdd();
  const IsCrongLeftOdd = new IsLeft(Crong.leftPage).IsLeftOdd();

  class IsRight {
    constructor(rightPage) {
      this.rightPage = rightPage;
    }

    IsRightEven() {
      if (this.rightPage % 2 === 0) {
        return true;
      }
      return false;
    }
  }

  const IsPobiRightEven = new IsRight(Pobi.rightPage).IsRightEven();
  const IsCrongRightEven = new IsRight(Crong.rightPage).IsRightEven();

  class LeftPlusOne {
    constructor({ leftPage, rightPage }) {
      this.leftPage = leftPage;
      this.rightPage = rightPage;
    }
    IsLeftPlusOneEqulRight() {
      if (this.leftPage + 1 === this.rightPage) {
        return true;
      }
      return false;
    }
  }

  const IsPobiLeftPlusOne = new LeftPlusOne(Pobi).IsLeftPlusOneEqulRight();
  const IsCrongLeftPlusOne = new LeftPlusOne(Crong).IsLeftPlusOneEqulRight();

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

  const IsPobiLeftOver = new LeftOverPage(Pobi).IsLeftOverPage();
  const IsCrongLeftOver = new LeftOverPage(Crong).IsLeftOverPage();

  class RightOverPage {
    constructor({ rightPage }) {
      this.rightPage = rightPage;
    }
    IsRightOverPage() {
      if (this.rightPage > 400 || this.rightPage < 2) {
        return false;
      }
      return true;
    }
  }

  const IsPobiRightver = new RightOverPage(Pobi).IsRightOverPage();
  const IsCrongRightOver = new RightOverPage(Crong).IsRightOverPage();

  if (
    !IsPobiLeftOdd ||
    !IsCrongLeftOdd ||
    !IsPobiRightEven ||
    !IsCrongRightEven ||
    !IsPobiLeftPlusOne ||
    !IsCrongLeftPlusOne ||
    !IsPobiLeftOver ||
    !IsCrongLeftOver ||
    !IsPobiRightver ||
    !IsCrongRightOver
  ) {
    return -1;
  }

  class DigitMaker {
    constructor(page) {
      this.page = page;
    }
    SeperateDigit() {
      let temp = this.page;
      const Digits = [];
      while (temp > 1) {
        Digits.push(temp % 10);
        temp =  parseInt(temp / 10);
      }
      return Digits;
    }
  }

  const PobiLeftDigits = new DigitMaker(Pobi.leftPage).SeperateDigit();
  const PobiRightDigits = new DigitMaker(Pobi.rightPage).SeperateDigit();
  const CrongLeftDigits = new DigitMaker(Crong.leftPage).SeperateDigit();
  const CrongRightDigits = new DigitMaker(Crong.rightPage).SeperateDigit();

  class ScoreMaker {
    constructor(pages) {
      this.pages = pages;
    }

    CalculateScore() {
      return Math.max(
        this.pages.reduce((a, b) => a + b),
        this.pages.reduce((a, b) => a * b)
      );
    }
  }

  const PobiScore = Math.max(
    new ScoreMaker(PobiLeftDigits).CalculateScore(),
    new ScoreMaker(PobiRightDigits).CalculateScore()
  );
  const CrongScore = Math.max(
    new ScoreMaker(CrongLeftDigits).CalculateScore(),
    new ScoreMaker(CrongRightDigits).CalculateScore()
  );

  class WhoIsWinner {
    constructor(pobiscore, crongscore) {
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

  const answer = new WhoIsWinner(PobiScore, CrongScore).CompareScore();
  return answer;
}

module.exports = problem1;
