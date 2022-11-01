const problem1Util = require('../src/problem1Util');

describe('Problem1 Util test', () => {
  test('getDigitFromNum', () => {
    const digitList = problem1Util.getDigitFromNum(1234);
    expect(digitList).toStrictEqual([1, 2, 3, 4]);
  });

  describe('calcPageValues', () => {
    test('not include 0', () => {
      const digitList = problem1Util.calcPageValues([1, 2, 3]);
      expect(digitList).toStrictEqual([6, 6]);
    });

    test('include 0', () => {
      const digitList = problem1Util.calcPageValues([1, 0, 3]);
      expect(digitList).toStrictEqual([4, 0]);
    });
  });
});
