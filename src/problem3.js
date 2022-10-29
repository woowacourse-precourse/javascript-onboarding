function problem3(number) {
  class Digits {
    constructor(number) {
      this.number = number;
    }
    digitMaker() {
      let digit = this.number;
      const digits = [];
      while (digit > 0) {
        digits.push(digit % 10);
        digit = parseInt(temp / 10);
      }
      return digits;
    }
  }

  const sepatedDigits = new Digits(number).digitMaker();

  return answer;
}

module.exports = problem3;
