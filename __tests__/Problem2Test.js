const problem2Util = require('../src/problem2Util');

describe('Problem2 Util test', () => {
  describe('isValidString', () => {
    test('valid', () => {
      const result = problem2Util.isValidString('asdkhjabwjh', 1, 300);
      expect(result).toBe(true);
    });

    test('inValid - string length is smaller then min length', () => {
      const result = problem2Util.isValidString('asdkhjabwjh', 100, 300);
      expect(result).toBe(false);
    });

    test('inValid - string length is larger then max length', () => {
      const result = problem2Util.isValidString('asdkhjabwjh', 1, 5);
      expect(result).toBe(false);
    });
    test('inValid - include Upper case', () => {
      const result = problem2Util.isValidString('asdkhjaASbwjh', 1, 300);
      expect(result).toBe(false);
    });
  });

  describe('getDuplicatedInfoList', () => {
    test('normal duplicate', () => {
      const result = problem2Util.getDuplicatedInfoList('aacdd');
      console.log(result);
      expect(result).toStrictEqual([(0, 2), (3, 2)]);
    });

    test('all duplicate', () => {
      const result = problem2Util.getDuplicatedInfoList('aaaaaa');
      console.log(result);
      expect(result).toStrictEqual([(0, 6)]);
    });

    test('nothing duplicate', () => {
      const result = problem2Util.getDuplicatedInfoList('asewaxv');
      console.log(result);
      expect(result).toStrictEqual([]);
    });
  });
});
