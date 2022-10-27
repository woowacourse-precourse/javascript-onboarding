function problem1(pobi, crong) {
  if (pobi[0] - pobi[1] !== -1 || crong[0] - crong[1] !== -1) return -1;

  let answer;
  let pobiMax = 0;
  let crongMax = 0;

  const getSum = num => [...num + ''].map(el => +el).reduce((prev, curr) => prev + curr, 0);
  const getMultiply = num => [...num + ''].map(el => +el).reduce((prev, curr) => prev * curr, 1);

  pobi.forEach(num => pobiMax = Math.max(pobiMax, getSum(num), getMultiply(num)));
  crong.forEach(num => crongMax = Math.max(crongMax, getSum(num), getMultiply(num)));

  if (pobiMax === crongMax) answer = 0;
  else answer = pobiMax > crongMax ? 1 : 2;

  return answer;
}

module.exports = problem1;
