// 0. 예외 처리
//  0.1 [x] (2 ~ 398) 사이 숫자일 것

// 1. 로직
//  1.1 [x] pobi와 crong이 가질 수 있는 가장 큰 수 구하기
//  1.2 [x] pobi와 crong의 숫자를 비교하기

const plus = (nums) => {
  return nums.reduce((prev, curr) => {
    Number(prev) + Number(curr);
  }, 0);
}

const multiple = (nums) => {
  return nums.reduce((prev, curr) => {
    Number(prev) * Number(curr);
  }, 1);
}

const calMax = (pobi, crong) => {
  [pobi[0], pobi[1]] = [String(pobi[0]).split(""), String(pobi[1]).split("")];
  [crong[0], crong[1]] = [String(crong[0]).split(""), String(crong[1]).split("")];

  const pobiMax = Math.max(plus(pobi[0]), plus(pobi[1]), multiple(pobi[0]), multiple(pobi[1]));
  const crongMax = Math.max(plus(crong[0]), plus(crong[1]), multiple(crong[0]), multiple(crong[1]));

  return [pobiMax, crongMax];
}

function problem1(pobi, crong) {
  // 예외 사항
  if (pobi[1] <= 2 || pobi[0] >= 399) return -1;
  if (crong[1] <= 2 || crong[0] >= 388) return -1;

  const [maxPobi, maxCrong] = calMax(pobi, crong);

  return Math.max(maxPobi, maxCrong);
}

module.exports = problem1;
