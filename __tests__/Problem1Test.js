const problem1Util = require('../src/problem1Util');

describe('Problem1 Util test', () => {
  describe('getDigitFromNum', () => {
    test('correct input', () => {
      const digitList = problem1Util.getDigitFromNum(1234);
      expect(digitList).toStrictEqual([4, 3, 2, 1]);
    });
  });
});
