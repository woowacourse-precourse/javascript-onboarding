const problem3Util = require('../src/problem3Util');

describe('Problem3 Util test', () => {
  test('getDigitFromNum', () => {
    const digitList = problem3Util.getDigitFromNum(1234);
    expect(digitList).toStrictEqual([1, 2, 3, 4]);
  });
});
