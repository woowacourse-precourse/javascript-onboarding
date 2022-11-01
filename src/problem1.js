// 자릿수 더하는 함수
function sum(num) {
  let res = 0;
  while (num) {
    res += num % 10;
    num = parseInt(num / 10);
  }
  return res;
}

// 자릿수 곱하는 함수
function multi(num) {
  let res = 1;
  while (num) {
    res *= num % 10;
    num = parseInt(num / 10);
  }
  return res;
}

function problem1(pobi, crong) {
  // 예외 (페이지 차이가 1 이상 or 페이지가 범위에 없을때)
  // 예외 추가 - null, 1 or 400, null  || [1,2] [399,400]
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) return -1;
  const arr = [...pobi, ...crong];
  arr.forEach((x) => {
    if (x < 1 || x > 400) return -1;
  });

  let maxPobi = Math.max(
    sum(pobi[0]),
    multi(pobi[0]),
    sum(pobi[1]),
    multi(pobi[1])
  );
  let maxCrong = Math.max(
    sum(crong[0]),
    multi(crong[0]),
    sum(crong[1]),
    multi(crong[1])
  );

  if (maxPobi < maxCrong) return 2;
  else if (maxPobi === maxCrong) return 0;
  else return 1;
}

module.exports = problem1;
