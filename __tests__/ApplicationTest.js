const problem1 = require('../src/problem1');
const problem2 = require('../src/problem2');
const problem3 = require('../src/problem3');
const problem4 = require('../src/problem4');
const problem5 = require('../src/problem5');
const problem6 = require('../src/problem6');
const problem7 = require('../src/problem7');

describe('problem1', () => {
  test('case1', () => {
    expect(problem1([97, 98], [197, 198])).toEqual(0);
  });

  test('case2', () => {
    expect(problem1([131, 132], [211, 212])).toEqual(1);
  });

  test('case3', () => {
    expect(problem1([99, 102], [211, 212])).toEqual(-1);
  });
});

describe('problem2', () => {
  test('case1', () => {
    expect(problem2('browoanoommnaon')).toEqual('brown');
  });
  test('case2', () => {
    expect(problem2('zyelleyz')).toEqual('');
  });
});

describe('problem3', () => {
  test('case1', () => {
    expect(problem3(13)).toEqual(4);
  });
  test('case2', () => {
    expect(problem3(33)).toEqual(14);
  });
});

describe('problem4', () => {
  test('case1', () => {
    expect(problem4('I love you')).toEqual('R olev blf');
  });
});

describe('problem5', () => {
  test('case1', () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });

  test('case2', () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });
});

describe('problem6', () => {
  test('case1', () => {
    expect(
      problem6([
        ['jm@email.com', '제이엠'],
        ['jason@email.com', '제이슨'],
        ['woniee@email.com', '워니'],
        ['mj@email.com', '엠제이'],
        ['nowm@email.com', '이제엠'],
      ]),
    ).toEqual(['jason@email.com', 'jm@email.com', 'mj@email.com']);
  });
  test('case2', () => {
    expect(
      problem6([
        ['bms@email.com', '제이콕'],
        ['Am@email.com', '제스콕'],
        ['ama@email.com', '제스이'],
      ]),
    ).toEqual(['Am@email.com', 'ama@email.com']);
  });
  test('case3 닉네임 중복 될 때', () => {
    expect(
      problem6([
        ['jms@email.com', '제이슨'],
        ['jm@email.com', '제이슨'],
      ]),
    ).toEqual(['jm@email.com', 'jms@email.com']);
  });
  test('case4 자신의 닉네임에서 중복되는 부분이 존재할 때', () => {
    expect(
      problem6([
        ['jms@email.com', '아'],
        ['jm@email.com', '가나다라가나'],
      ]),
    ).toEqual([]);
  });
  test('case5 닉네임의 순서가 바뀌었을 때', () => {
    expect(
      problem6([
        ['jms@email.com', '가나'],
        ['jm@email.com', '나가'],
      ]),
    ).toEqual([]);
  });
});

describe('problem7', () => {
  test('case1', () => {
    expect(
      problem7(
        'mrko',
        [
          ['donut', 'andole'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan'],
      ),
    ).toEqual(['andole', 'jun', 'bedi']);
  });
});
