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
  test('case1', () => {
    expect(problem2('browoanoommnaon')).toEqual('brown');
  });

  test('case2', () => {
    expect(problem2('zyelleyz')).toEqual('');
  });

  test('case3', () => {
    expect(
      problem2(
        'abababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababababab'
      )
    ).toEqual('ERROR');
  });

  test('case4', () => {
    expect(
      problem2(
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      )
    ).toEqual('');
  });

  test('case5', () => {
    expect(problem2('aazzqweqweaaq')).toEqual('qweqweq');
  });

  test('case6', () => {
    expect(problem2('ksekkset')).toEqual('kseset');
  });

  test('abbaa 문자 테스트', () => {
    expect(problem2('abbaa')).toEqual('a');
  });

  test('암호문은 1 이상 1000 이하의 문자열이다.', () => {
    expect(
      problem2(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nunc, accumsan vel metus ac, auctor convallis arcu. Phasellus sollicitudin accumsan leo et malesuada. Cras auctor, nulla tincidunt rutrum aliquam, nisl metus interdum felis, id viverra velit orci ac lorem. Etiam felis mi, tempus id tincidunt vel, mollis at nulla. Sed nisi ex, malesuada ut consequat convallis, commodo id velit. Pellentesque et urna eleifend purus dictum dignissim ac id massa. Phasellus ullamcorper lorem odio, sed tempor est vehicula sed. Phasellus sagittis ipsum diam, vel consequat odio varius sit amet. Suspendisse pharetra nulla sit amet eros ultrices ultrices. Nullam quam mauris, posuere sed magna eu, bibendum varius augue. Praesent hendrerit diam ante, ut tempor justo luctus ac. Phasellus cursus elementum neque, sed semper orci venenatis nec. Ut quis rhoncus diam, congue tempus mauris. Maecenas ac metus a nunc consectetur consequat. Duis eget est sit amet nisl elementum tempus a vitae nunc. Pellentesque euismod ligula ac nunc suscipit ultricies.'
      )
    ).toEqual('ERROR');
    expect(problem2('')).toEqual('ERROR');
  });
});

describe('problem3', () => {
  test('case1', () => {
    expect(problem3(13)).toEqual(4);
  });

  test('case2', () => {
    expect(problem3(33)).toEqual(14);
  });

  test('333 테스트', () => {
    expect(problem3(333)).toEqual(228);
  });

  test('2 테스트', () => {
    expect(problem3(2)).toEqual(0);
  });

  test('받은 number는 1 이상 10,000 이하인 자연수이다.', () => {
    expect(problem3(5.6)).toEqual('ERROR');
    expect(problem3(0)).toEqual('ERROR');
    expect(problem3(10040)).toEqual('ERROR');
  });
});

describe('problem4', () => {
  test('case1', () => {
    expect(problem4('I love you')).toEqual('R olev blf');
  });

  test('case2', () => {
    expect(problem4('Hello  Everyone!')).toEqual('Svool  Veviblmv!');
  });

  test('case3', () => {
    expect(problem4('abcdefghijklmnopqrstuvwxyz')).toEqual(
      'zyxwvutsrqponmlkjihgfedcba'
    );
  });

  test('case4', () => {
    expect(problem4('abcdefghijklmnopqrstuvwxyz !@#!#  ')).toEqual(
      'zyxwvutsrqponmlkjihgfedcba !@#!#  '
    );
  });

  test('case5', () => {
    expect(problem4('Svool, Dliow! 123')).toEqual('Hello, World! 123');
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
    expect(problem5(1)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 1]);
  });

  test('case4', () => {
    expect(problem5(49_999)).toEqual([0, 4, 1, 4, 1, 4, 1, 4, 9]);
  });

  test('case5', () => {
    expect(problem5(1_000_000)).toEqual([20, 0, 0, 0, 0, 0, 0, 0, 0]);
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
  test('case2', () => {
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
  test('case6', () => {
    expect(
      problem6([
        ['kim@email.com', '김ㅡ이'],
        ['name@email.com', 'ㅡ이야'],
        ['choi@email.com', '최강'],
        ['lee@email.com', '강합니다'],
        ['jun@email.com', '왜ㅇㅡ이야'],
      ])
    ).toEqual(['jun@email.com', 'kim@email.com', 'name@email.com']);
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
  test('user가 친구를 갖지 않을 때', () => {
    expect(
      problem7(
        'hello',
        [
          ['andole', 'jun'],
          ['andole', 'bdei'],
          ['jun', 'shakevan'],
          ['jun', 'kane'],
          ['jun', 'sam'],
          ['bdei', 'shakevan'],
          ['bedi', 'anne'],
          ['bedi', 'sam'],
          ['anne', 'mrko'],
        ],
        ['donut', 'anne', 'mrko', 'mrko', 'sam']
      )
    ).toEqual(['mrko', 'anne', 'donut', 'sam']);
  });
  test('visitors의 길이 예외조항 확인', () => {
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

  const makeName = (index) => {
    return Array(30)
      .fill()
      .map((_, chIndex) => 'az'[index & (1 << chIndex) ? 1 : 0])
      .join('');
  };
  const user = 'mrko';

  test('case8', () => {
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
