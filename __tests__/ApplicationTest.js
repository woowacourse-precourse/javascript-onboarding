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

  test('case4', () => {
    expect(problem1([99, 103], [211, 212])).toEqual(-1);
  });

  test('case5', () => {
    expect(problem1([399, 400], [211, 212])).toEqual(1);
  });

  test('case6', () => {
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });

  test('case7', () => {
    expect(problem1([99, 100], [-1, 0])).toEqual(-1);
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

  test('case3', () => {
    expect(problem3(333)).toEqual(228);
  });

  test('case4', () => {
    expect(problem3(2)).toEqual(0);
  });

  test('case5', () => {
    expect(problem3(5.6)).toEqual(false);
    expect(problem3(0)).toEqual(false);
    expect(problem3(10040)).toEqual(false);
  });
});

describe('problem4', () => {
  test('case1', () => {
    expect(problem4('I love you')).toEqual('R olev blf');
  });

  test('case2', () => {
    expect(problem4('Hello  Everyone!')).toEqual('Svool  Veviblmv!');
    expect(problem4('Hello  Everyone! 123')).toEqual('Svool  Veviblmv! 123');
  });

  test('case3', () => {
    expect(problem4('abcdefghijklmnopqrstuvwxyz')).toEqual(
      'zyxwvutsrqponmlkjihgfedcba'
    );
    expect(problem4('abcdefghijklmnopqrstuvwxyz !@#!#  ')).toEqual(
      'zyxwvutsrqponmlkjihgfedcba !@#!#  '
    );
    expect(problem4('ABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&*  ')).toEqual(
      'ZYXWVUTSRQPONMLKJIHGFEDCBA !@#$%^&*  '
    );
  });

  test('case4', () => {
    expect(
      problem4(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nunc, accumsan vel metus ac, auctor convallis arcu. Phasellus sollicitudin accumsan leo et malesuada. Cras auctor, nulla tincidunt rutrum aliquam, nisl metus interdum felis, id viverra velit orci ac lorem. Etiam felis mi, tempus id tincidunt vel, mollis at nulla. Sed nisi ex, malesuada ut consequat convallis, commodo id velit. Pellentesque et urna eleifend purus dictum dignissim ac id massa. Phasellus ullamcorper lorem odio, sed tempor est vehicula sed. Phasellus sagittis ipsum diam, vel consequat odio varius sit amet. Suspendisse pharetra nulla sit amet eros ultrices ultrices. Nullam quam mauris, posuere sed magna eu, bibendum varius augue. Praesent hendrerit diam ante, ut tempor justo luctus ac. Phasellus cursus elementum neque, sed semper orci venenatis nec. Ut quis rhoncus diam, congue tempus mauris. Maecenas ac metus a nunc consectetur consequat. Duis eget est sit amet nisl elementum tempus a vitae nunc. Pellentesque euismod ligula ac nunc suscipit ultricies.'
      )
    ).toEqual('word는 길이가 1 이상 1,000 이하인 문자열이다.');
  });
});

describe('problem5', () => {
  test('case1', () => {
    expect(problem5(50237)).toEqual([1, 0, 0, 0, 0, 2, 0, 3, 7]);
  });

  test('case2', () => {
    expect(problem5(15000)).toEqual([0, 1, 1, 0, 0, 0, 0, 0, 0]);
  });

  test('case3', () => {
    expect(problem5(49999)).toEqual([0, 4, 1, 4, 1, 4, 1, 4, 9]);
    expect(problem5(1)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1]);
    expect(problem5(1000000)).toEqual([20, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  test('case4', () => {
    expect(problem5(0)).toEqual(false);
    expect(problem5(-20)).toEqual(false);
    expect(problem5(1200000)).toEqual(false);
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
      ])
    ).toEqual(['jason@email.com', 'jm@email.com', 'mj@email.com']);
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
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
      )
    ).toEqual(['andole', 'jun', 'bedi']);
  });
});
