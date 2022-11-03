const problem1 = require('../src/problem1');
const problem2 = require('../src/problem2');
const problem3 = require('../src/problem3');
const problem4 = require('../src/problem4');
const problem5 = require('../src/problem5');
const problem6 = require('../src/problem6');
const problem7 = require('../src/problem7');

describe('problem1', () => {
  test('페이지는 1부터 400페이지여야 한다.', () => {
    expect(problem1([99, 100], [-1, 0])).toEqual(-1);
    expect(problem1([401, 402], [211, 212])).toEqual(-1);
  });
  test('왼쪽 페이지가 홀수이어야 한다.', () => {
    expect(problem1([98, 99], [193, 194])).toEqual(-1);
    expect(problem1([99, 100], [196, 197])).toEqual(-1);
  });
  test('오른쪽 페이지가 짝수이어야 한다.', () => {
    expect(problem1([99, 103], [211, 212])).toEqual(-1);
    expect(problem1([99, 100], [194, 195])).toEqual(-1);
    expect(problem1([100, 101], [193, 194])).toEqual(-1);
  });
  test('페이지는 연속되어야 한다.', () => {
    expect(problem1([100, 101], [393, 400])).toEqual(-1);
  });
  test('왼쪽 페이지 번호는 오른쪽 페이지 번호보다 크지 않아야 한다.', () => {
    expect(problem1([50, 30], [393, 394])).toEqual(-1);
  });
  test('시작, 마지막 페이지는 나오지 않아야 한다.', () => {
    expect(problem1([1, 2], [40, 41])).toEqual(-1);
    expect(problem1([50, 30], [393, 400])).toEqual(-1);
  });
  test('페이지 형식은 [왼쪽 페이지 번호, 오른쪽 페이지 번호] 이다.', () => {
    expect(problem1([121, 122, 123], [211, 212])).toEqual(-1);
  });
});

describe('problem2', () => {
  test('abbaa 문자 테스트', () => {
    expect(problem2('abbaa')).toEqual('a');
  });
  test('암호문은 1 이상 1000 이하의 문자열이다.', () => {
    expect(
      problem2(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nunc, accumsan vel metus ac, auctor convallis arcu. Phasellus sollicitudin accumsan leo et malesuada. Cras auctor, nulla tincidunt rutrum aliquam, nisl metus interdum felis, id viverra velit orci ac lorem. Etiam felis mi, tempus id tincidunt vel, mollis at nulla. Sed nisi ex, malesuada ut consequat convallis, commodo id velit. Pellentesque et urna eleifend purus dictum dignissim ac id massa. Phasellus ullamcorper lorem odio, sed tempor est vehicula sed. Phasellus sagittis ipsum diam, vel consequat odio varius sit amet. Suspendisse pharetra nulla sit amet eros ultrices ultrices. Nullam quam mauris, posuere sed magna eu, bibendum varius augue. Praesent hendrerit diam ante, ut tempor justo luctus ac. Phasellus cursus elementum neque, sed semper orci venenatis nec. Ut quis rhoncus diam, congue tempus mauris. Maecenas ac metus a nunc consectetur consequat. Duis eget est sit amet nisl elementum tempus a vitae nunc. Pellentesque euismod ligula ac nunc suscipit ultricies.'
      )
    ).toEqual('암호문은 1자 이상 1,000자 이하의 문자열이여야 합니다.');
    expect(problem2('')).toEqual(
      '암호문은 1자 이상 1,000자 이하의 문자열이여야 합니다.'
    );
  });
});

describe('problem3', () => {
  test('333 테스트', () => {
    expect(problem3(333)).toEqual(228);
  });
  test('2 테스트', () => {
    expect(problem3(2)).toEqual(0);
  });
  test('받은 number는 1 이상 10,000 이하인 자연수이다.', () => {
    expect(problem3(5.6)).toEqual('1 이상 10,000 이하의 자연수여야 합니다.');
    expect(problem3(0)).toEqual('1 이상 10,000 이하의 자연수여야 합니다.');
    expect(problem3(10040)).toEqual('1 이상 10,000 이하의 자연수여야 합니다.');
  });
});

describe('problem4', () => {
  test('Hello  Everyone 테스트', () => {
    expect(problem4('Hello  Everyone!')).toEqual('Svool  Veviblmv!');
    expect(problem4('Hello  Everyone! 123')).toEqual('Svool  Veviblmv! 123');
  });
  test('알파벳 테스트', () => {
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
  test('word는 길이가 1 이상 1,000 이하인 문자열이다.', () => {
    expect(
      problem4(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nunc, accumsan vel metus ac, auctor convallis arcu. Phasellus sollicitudin accumsan leo et malesuada. Cras auctor, nulla tincidunt rutrum aliquam, nisl metus interdum felis, id viverra velit orci ac lorem. Etiam felis mi, tempus id tincidunt vel, mollis at nulla. Sed nisi ex, malesuada ut consequat convallis, commodo id velit. Pellentesque et urna eleifend purus dictum dignissim ac id massa. Phasellus ullamcorper lorem odio, sed tempor est vehicula sed. Phasellus sagittis ipsum diam, vel consequat odio varius sit amet. Suspendisse pharetra nulla sit amet eros ultrices ultrices. Nullam quam mauris, posuere sed magna eu, bibendum varius augue. Praesent hendrerit diam ante, ut tempor justo luctus ac. Phasellus cursus elementum neque, sed semper orci venenatis nec. Ut quis rhoncus diam, congue tempus mauris. Maecenas ac metus a nunc consectetur consequat. Duis eget est sit amet nisl elementum tempus a vitae nunc. Pellentesque euismod ligula ac nunc suscipit ultricies.'
      )
    ).toEqual('입력된 문자는 1 이상 1,000 이하의 문자열이여야 합니다.');
  });
});

describe('problem5', () => {
  test('5만원권을 제외한 최대 금액.', () => {
    expect(problem5(49999)).toEqual([0, 4, 1, 4, 1, 4, 1, 4, 9]);
  });
  test('money는 1 이상 1,000,000 이하인 자연수이다.', () => {
    expect(problem5(1)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1]);
    expect(problem5(1000000)).toEqual([20, 0, 0, 0, 0, 0, 0, 0, 0]);
    expect(problem5(0)).toEqual(
      '금액은 1 이상 1,000,000 이하의 자연수여야 합니다.'
    );
    expect(problem5(-20)).toEqual(
      '금액은 1 이상 1,000,000 이하의 자연수여야 합니다.'
    );
    expect(problem5(1200000)).toEqual(
      '금액은 1 이상 1,000,000 이하의 자연수여야 합니다.'
    );
  });
});

const makeEmail = (index) => {
  const alphabet = 'abcdefghij';

  return (
    'aaaaa' +
    alphabet[~~((index % 10000) / 1000)] +
    alphabet[~~((index % 1000) / 100)] +
    alphabet[~~((index % 100) / 10)] +
    alphabet[~~((index % 10) / 1)] +
    '@email.com'
  );
};

const makeNickname = (index) => {
  const first = '가'.charCodeAt(0);
  const bound = '힣'.charCodeAt(0) - '가'.charCodeAt(0) + 1;

  return String.fromCharCode(
    ...Array(19)
      .fill()
      .map((_, chIndex) => {
        return first + ((index + (1 << chIndex)) % bound);
      })
  );
};

describe('problem6', () => {
  test('case1', () => {
    expect(
      problem6([
        ['jm@email.com', '제이엠'],
        ['jason@email.com', '제이슨'],
        ['woniee@email.com', '워니'],
        ['mj@email.com', '엠제이'],
        ['nowm@email.com', '이제엠'],
        ['jasp@email.com', '박이김'],
        ['jp@email.com', '김이박'],
        ['qpw@email.com', '김이순'],
        ['teemo@email.com', '티모'],
        ['banana@email.com', '대위티모'],
        ['secondJm@email.com', '제이엠'],
        ['apple@email.com', '땷횱봵'],
        ['stran@email.com', '횱봵으'],
        ['zebra@email.com', '두글자이상의문자가연속적으로이제맞티모'],
      ])
    ).toEqual([
      'apple@email.com',
      'banana@email.com',
      'jason@email.com',
      'jm@email.com',
      'jp@email.com',
      'mj@email.com',
      'nowm@email.com',
      'qpw@email.com',
      'secondJm@email.com',
      'stran@email.com',
      'teemo@email.com',
      'zebra@email.com',
    ]);
  });

  test('case2', () => {
    expect(
      problem6([
        ['jm@email.com', '제이엠제이워니'],
        ['jason@email.com', '제이슨'],
        ['woniee@email.com', '워니'],
        ['mj@email.com', '엠제이'],
        ['nowm@email.com', '이워니'],
      ])
    ).toEqual([
      'jason@email.com',
      'jm@email.com',
      'mj@email.com',
      'nowm@email.com',
      'woniee@email.com',
    ]);
  });

  test('case4', () => {
    expect(
      problem6(
        Array(10000)
          .fill()
          .map((_, index) => {
            return [makeEmail(index), makeNickname(index)];
          })
      )
    ).toEqual([]);
  });

  test('case5', () => {
    expect(
      problem6(
        Array(10000)
          .fill()
          .map((_, index) => {
            return [
              makeEmail(index),
              index % 2500 !== 0
                ? makeNickname(index)
                : makeNickname(index).substring(0, 16) + '우테코',
            ];
          })
      )
    ).toEqual([
      'aaaaaaaaa@email.com',
      'aaaaacfaa@email.com',
      'aaaaafaaa@email.com',
      'aaaaahfaa@email.com',
    ]);
  });
});

describe('problem7', () => {
  test('case2', () => {
    expect(
      problem7(
        'mrko',
        [
          ['mrko', 'jun'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
      )
    ).toEqual(['andole', 'bedi']);
  });
  test('case3', () => {
    expect(
      problem7(
        'mrko',
        [
          ['mrko', 'jun'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['jun', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['bedi', 'bedi', 'donut', 'bedi', 'shakevan']
      )
    ).toEqual(['andole', 'bedi']);
  });
  test('case4', () => {
    expect(
      problem7(
        'mrko',
        [
          ['mrko', 'jun'],
          ['bedi', 'jun'],
          ['bedi', 'donut'],
          ['donut', 'jun'],
          ['donut', 'mrko'],
          ['shakevan', 'andole'],
          ['jun', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'mrko'],
        ],
        ['donut', 'shakevan']
      )
    ).toEqual(['andole', 'bedi']);
  });
  test('case5', () => {
    expect(
      problem7(
        'andole',
        [
          ['andole', 'jun'],
          ['donut', 'jun'],
          ['donut', 'shakevan'],
          ['shakevan', 'andole'],
          ['shakevan', 'jun'],
          ['shakevan', 'bedi'],
          ['anne', 'jun'],
        ],
        ['donut', 'mrko', 'peter', 'sam']
      )
    ).toEqual(['donut', 'anne', 'bedi', 'mrko', 'peter']);
  });
  test('case6', () => {
    expect(
      problem7(
        'hello',
        [
          ['andole', 'jun'],
          ['andole', 'bedi'],
          ['jun', 'shakevan'],
          ['jun', 'kane'],
          ['jun', 'sam'],
          ['bedi', 'shakevan'],
          ['bedi', 'anne'],
          ['bedi', 'sam'],
          ['anne', 'mrko'],
        ],
        ['donut', 'anne', 'mrko', 'mrko', 'sam']
      )
    ).toEqual(['mrko', 'anne', 'donut', 'sam']);
  });
  test('case8', () => {
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
        []
      )
    ).toEqual(['andole', 'jun']);
  });

  test('case9', () => {
    const makeName = (index) => {
      return Array(30)
        .fill()
        .map((_, chIndex) => 'az'[index & (1 << chIndex) ? 1 : 0])
        .join('');
    };
    const user = 'mrko';
    expect(
      problem7(
        user,
        [
          ...Array(5000)
            .fill()
            .map((_, index) => [user, makeName(index)]), // 0~4999까지 친구
          ...Array(5000)
            .fill()
            .map((_, index) => [makeName(index), makeName(5000 + index)]), // 5000~9999까지 친구의 친구
        ],
        [
          // 5066, 5067, 5068, 5069, 5070 순서대로 많이 방문
          ...Array(4000).fill(5066),
          ...Array(3000).fill(5067),
          ...Array(2000).fill(5068),
          ...Array(800).fill(5069),
          ...Array(200).fill(5070),
        ].map(makeName)
      )
    ).toEqual([5066, 5067, 5068, 5069, 5070].map(makeName));
  });
});
