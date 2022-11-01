const problem1Util = require('../src/problem1Util');

describe('Problem1 Util test', () => {
  test('getDigitFromNum', () => {
    const digitList = problem1Util.getDigitFromNum(1234);
    expect(digitList).toStrictEqual([1, 2, 3, 4]);
  });

  describe('calcPageValues', () => {
    test('not include 0', () => {
      const calcResult = problem1Util.calcPageValues([1, 2, 3]);
      expect(calcResult).toStrictEqual([6, 6]);
    });

    test('include 0', () => {
      const calcResult = problem1Util.calcPageValues([1, 0, 3]);
      expect(calcResult).toStrictEqual([4, 0]);
    });
  });

  describe('compareValue', () => {
    test('draw', () => {
      const result = problem1Util.compareValue(2, 2);
      expect(result).toBe(0);
    });

    test('win', () => {
      const result = problem1Util.compareValue(3, 2);
      expect(result).toBe(1);
    });

    test('lose', () => {
      const result = problem1Util.compareValue(2, 3);
      expect(result).toBe(-1);
    });
  });

  describe('isValidPage', () => {
    test('valid', () => {
      const result = problem1Util.isValidPage(5, 6, 1, 100);
      expect(result).toBe(true);
    });

    test('inValid - left page is state page', () => {
      const result = problem1Util.isValidPage(1, 2, 1, 100);
      expect(result).toBe(false);
    });

    test('inValid - right page is last page', () => {
      const result = problem1Util.isValidPage(99, 100, 1, 100);
      expect(result).toBe(false);
    });

    test('inValid - left page and right page diff is not 1', () => {
      const result = problem1Util.isValidPage(3, 6, 1, 100);
      expect(result).toBe(false);
    });

    test('inValid - left page is even', () => {
      const result = problem1Util.isValidPage(4, 6, 1, 100);
      expect(result).toBe(false);
    });

    test('inValid - right page is odd', () => {
      const result = problem1Util.isValidPage(5, 7, 1, 100);
      expect(result).toBe(false);
    });
  });
});
