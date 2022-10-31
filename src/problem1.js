function problem1(pobi, crong) {
  // 예외처리
  // 옆페이지가 아니면 오류
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  // 시작면이나 마지막면이 나오면 오류
  if (pobi[0] <= 1 || pobi[0] >= 400 || pobi[1] <= 1 || pobi[1] >= 400)
    return -1;
  if (crong[0] <= 1 || crong[0] >= 400 || crong[1] <= 1 || crong[1] >= 400)
    return -1;

  // 비교
  const pobiScores = [];
  const crongScores = [];

  let arr1 = pobi[0]
    .toString()
    .split("")
    .map((x) => parseInt(x));
  pobiScores.push(arr1.reduce((acc, cur) => acc + cur, 0));
  pobiScores.push(arr1.reduce((acc, cur) => acc * cur, 1));
  let arr2 = pobi[1]
    .toString()
    .split("")
    .map((x) => parseInt(x));
  pobiScores.push(arr2.reduce((acc, cur) => acc + cur, 0));
  pobiScores.push(arr2.reduce((acc, cur) => acc * cur, 1));

  let arr3 = crong[0]
    .toString()
    .split("")
    .map((x) => parseInt(x));
  crongScores.push(arr3.reduce((acc, cur) => acc + cur, 0));
  crongScores.push(arr3.reduce((acc, cur) => acc * cur, 1));
  let arr4 = crong[1]
    .toString()
    .split("")
    .map((x) => parseInt(x));
  crongScores.push(arr4.reduce((acc, cur) => acc + cur, 0));
  crongScores.push(arr4.reduce((acc, cur) => acc * cur, 1));

  if (Math.max(...pobiScores) > Math.max(...crongScores)) return 1;
  else if (Math.max(...pobiScores) < Math.max(...crongScores)) return 2;
  else return 0;
}

console.log(problem1([131, 132], [211, 212]));

module.exports = problem1;
