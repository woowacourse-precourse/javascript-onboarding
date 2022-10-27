function problem1(pobi, crong) {
  if (pobi[0] - pobi[1] !== -1 || crong[0] - crong[1] !== -1) return -1;
  
  let answer;
  let max = 0;
  let pobiMax = 0;
  let crongMax = 0;

  const getSum = num => Math.max(max, [...num + ''].map(el => +el).reduce((prev, curr) => prev + curr, 0));
  const getMultiply = num => Math.max(max, [...num + ''].map(el => +el).reduce((prev, curr) => prev * curr, 1));

  pobi.forEach(num => pobiMax = Math.max(getSum(num), getMultiply(num)));
  crong.forEach(num => crongMax = Math.max(getSum(num), getMultiply(num)));

  console.log(pobiMax, crongMax);

  if (pobiMax === crongMax) answer = 0;
  else answer = pobiMax > crongMax ? 1 : 2;

  return answer;
}

module.exports = problem1;
