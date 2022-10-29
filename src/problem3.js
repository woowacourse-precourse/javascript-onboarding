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
        digit = parseInt(digit / 10);
      }
      return digits;
    }
  }

  const sepatedDigits = new Digits(number).digitMaker();

  class ValueTransfer {
    constructor(sepatedDigits) {
      this.sepatedDigits = sepatedDigits;
    }
    transfer() {
      const values = [];
      for (let i = 0; i < this.sepatedDigits.length; i++) {
        if (this.sepatedDigits[i] < 3) {
          values.push(0);
        } else if (this.sepatedDigits[i] >= 3 && this.sepatedDigits[i] < 6) {
          values.push(1);
        } else if (this.sepatedDigits[i] >= 6 && this.sepatedDigits[i] < 9) {
          values.push(2);
        } else {
          values.push(3);
        }
      }
      return values;
    }
  }

  const transferedValues = new ValueTransfer(sepatedDigits).transfer();

  return answer;
}

module.exports = problem3;
