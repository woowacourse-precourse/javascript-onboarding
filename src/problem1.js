function problem1(pobi, crong) {

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
