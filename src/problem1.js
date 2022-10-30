function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1 ) {
    return -1;
  } else if (largeNumber(pobi) > largeNumber(crong)) {
    return 1;
  } else if (largeNumber(pobi) < largeNumber(crong)) {
    return 2;
  } else if (largeNumber(pobi) === largeNumber(crong)) {
    return 0;
  }
}

// 최대값 구하는 함수
function largeNumber(n) {
  let arr = []
  for (i of n) {
    const num = i.toString().split('').map(x => parseInt(x));
    arr.push(num.reduce((prev, cur) => prev + cur, 0));
    arr.push(num.reduce((prev, cur) => prev * cur, 1));
  }
  return Math.max(...arr);
}

module.exports = problem1;
