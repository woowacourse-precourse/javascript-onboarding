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


  return answer;
}

module.exports = problem1;
