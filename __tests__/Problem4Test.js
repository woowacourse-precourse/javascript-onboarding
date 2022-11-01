const problem4Util = require('../src/problem4Util');

describe('Problem4 Util test', () => {
  test('A test', () => {
    const result = problem4Util.changeChar('A');
    expect(result).toStrictEqual('Z');
  });

  test('Z test', () => {
    const result = problem4Util.changeChar('Z');
    expect(result).toStrictEqual('A');
  });

  test('num test', () => {
    const result = problem4Util.changeChar('1');
    expect(result).toStrictEqual('1');
  });

  test('other test', () => {
    const result = problem4Util.changeChar('!');
    expect(result).toStrictEqual('!');
  });
});
