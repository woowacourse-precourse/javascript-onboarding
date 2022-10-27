function problem1(pobi, crong) {
  var answer;
  let arr = [];
  let plus;
  let multiply;
  let pobiLeftRight = [];
  let pobiMax;
  let crongLeftRight = [];
  let crongMax;

  // 포비
  pobi.map((index) => {
    arr = index
      .toString()
      .split("")
      .map((x) => parseInt(x));
    plus = arr.reduce((acc, cur) => acc + cur, 0);
    multiply = arr.reduce((acc, cur) => acc * cur, 1);
    pobiLeftRight.push(plus > multiply ? plus : multiply);
  });
  pobiMax =
    pobiLeftRight[0] > pobiLeftRight[1] ? pobiLeftRight[0] : pobiLeftRight[1];

  // 크롱
  crong.map((index) => {
    arr = index
      .toString()
      .split("")
      .map((x) => parseInt(x));
    plus = arr.reduce((acc, cur) => acc + cur, 0);
    multiply = arr.reduce((acc, cur) => acc * cur, 1);
    crongLeftRight.push(plus > multiply ? plus : multiply);
  });
  crongMax =
    crongLeftRight[0] > crongLeftRight[1]
      ? crongLeftRight[0]
      : crongLeftRight[1];

  return answer;
}

module.exports = problem1;

// 기능 목록
// 1. pobi의 왼쪽페이지의 합,곱과 오른쪽페이지의 합,곱을 구한 후, 큰 값을 찾는다.
// 2. pobi의 왼쪽페이지와 오른쪽페이지의 값중 큰 값을 본인의 점수로 한다.
// 3. crong 도 pobi와 같은 과정을 거친다.
// 4. 점수를 비교해 승자를 가린다.
