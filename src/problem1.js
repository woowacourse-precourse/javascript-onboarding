function problem1(pobi, crong) {
  let answer = 0;

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  const pobiMax = Math.max(...arrSum(pobi));
  const crongMax = Math.max(...arrSum(crong));

  if (pobiMax > crongMax) {
    answer = 1;
  } else if (pobiMax < crongMax) {
    answer = 2;
  } else {
    answer = 0;
  }
  return answer;
}

module.exports = problem1;

const arrSum = (arr) => {
  let result = [];
  for (let i = 0; i < 2; i++) {
    const sum = (arr[1] + '')
      .split('')
      .map((v) => parseInt(v))
      .reduce((s, n) => (i > 0 ? (s *= n) : (s += n)));
    result.push(sum);
  }
  return result;
};
