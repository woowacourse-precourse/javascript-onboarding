function problem1(pobi, crong) {
  let answer = null
  class Input {
    constructor ({name, leftPage, rightPage}) {
      this.name = name
      this.leftPage = leftPage
      this.rightPage = rightPage
    }
  }
  const Pobi = new Input({name: 'pobi', leftPage : pobi[0], rightPage : pobi[1]})
  const Crong = new Input({name: 'crong', leftPage : crong[0], rightPage : crong[1]})
  
  class IsLeft {
    constructor({leftPage}) {
      this.leftPage = leftPage
    }
    IsLeftOdd() {
      if(!this.leftPage / 2) {
        return true
      }
      return false
    }
  }

  const IsPobiLeftOdd = new IsLeft(pobi.leftPage)
  const IsCrongLeftOdd = new IsLeft(crong.leftPage)

  class IsRight {
    constructor({rightPage}) {
      this.rightPage = rightPage
    }
    IsRightEven() {
      if(this.rightPage / 2) {
        return true
      }
      return false
    }
  }

  const IsPobiRightEven = new IsRight(pobi.rightPage)
  const IsCrongRightEven = new IsRight(crong.rightPage)

  class IsLeftPlusOne {
    constructor({leftPage, rightPage}) {
      this.leftPage = leftPage
      this.rightPage = rightPage
    }
    LeftPlusOne() {
      if(this.leftPage + 1 === this.rightPage) {
        return true
      }
      return false
    }
  }

  const IsPobiLeftPlusOne = new IsLeftPlusOne(pobi.leftPage, pobi.rightPage)
  const IsCrongLeftPlusOne = new IsLeftPlusOne(crong.leftPage, crong.rightPage)
  
  class LeftOverPage {
    constructor({leftPage}) {
      this.leftPage
    }
    IsLeftOverPage() {
      if(this.leftPage > 399 || this.leftPage < 1) {
        return false
      }
      return true
    }
  }
  
  const IsPobiLeftOver = new LeftOverPage(pobi.leftPage)
  const IsCrongLeftOver = new LeftOverPage(crong.leftPage)

  class RightOverPage {
    constructor({rightPage}) {
      this.rightPage
    }
    IsLeftOverPage() {
      if(this.rightPage > 400 || this.rightPage < 2) {
        return false
      }
      return true
    }
  }
  
  const IsPobiRightver = new RightOverPage(pobi.rightPage)
  const IsCrongRightOver = new RightOverPage(crong.rightPage)

  if (IsPobiLeftOdd || IsCrongLeftOdd ||
    IsPobiRightEven || IsCrongRightEven ||
    IsPobiLeftPlusOne || IsCrongLeftPlusOne ||
    IsPobiLeftOver || IsCrongLeftOver ||
    IsPobiRightver || IsCrongRightOver) {
      return -1
    }

  class DigitMaker {
    constructor({page}) {
      this.page
    }
    SeperateDigit() {
      let temp = this.page
      const Digits = []
      while (temp > 0) {
        Digits.push(temp % 10)
        temp /= 10
      }
      return Digits
    }
  }

  const PobiLeftDigits = new DigitMaker(pobi.leftPage)
  const PobiRightDigits = new DigitMaker(pobi.rightPage)
  const CrongLeftDigits = new DigitMaker(crong.leftPage)
  const CrongRightDigits = new DigitMaker(crong.rightPage)

  class ScoreMaker {
    constructor
  }

  return answer;
}

module.exports = problem1;
