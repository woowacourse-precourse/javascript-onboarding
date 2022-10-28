function problem1(pobi, crong) {
  if (
    pobi[0] % 2 === 0 ||
    pobi[0] + 1 !== pobi[1] ||
    pobi[0] < 1 ||
    pobi[1] > 400
  )
    return -1;
  if (
    crong[0] % 2 === 0 ||
    crong[0] + 1 !== crong[1] ||
    crong[0] < 1 ||
    crong[1] > 400
  )
    return -1;
  const pobiScore = getScore(pobi[0], pobi[1]);
  const crongScore = getScore(crong[0], crong[1]);
  if (pobiScore > crongScore) return 1;
  else if (pobiScore < crongScore) return 2;
  else return 0;
}

function getScore(left, right) {
  return Math.max(plus(left), multiply(left), plus(right), multiply(right));
}

function plus(num) {
  return num
    .toString()
    .split("")
    .map(Number)
    .reduce((prev, cur) => prev + cur);
}

function multiply(num) {
  return num
    .toString()
    .split("")
    .map(Number)
    .reduce((prev, cur) => prev * cur);
}

module.exports = problem1;

/*
0. pobi[0]+1 = pobi[1]이 아니거나 pobi%2==0이면 -1리턴
1. Math.max(pobi[0].split('').reduce(더하기 or 곱하기))
2. pobi[1]에 대해서도 1번 하고 1,2중에 큰 값이 pobi 점수
3. crong도 1~2번으로 점수 구해서 이긴 대로 결과
*/
