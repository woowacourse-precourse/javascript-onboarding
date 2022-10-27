function problem1(pobi, crong) {
  let answer = 0;
  let pobiArr = [];
  let crongArr = [];

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  for (let i = 0; i < 2; i++) {
    const pobiSum = (pobi[1] + '')
      .split('')
      .map((v) => parseInt(v))
      .reduce((s, n) => (i > 0 ? (s *= n) : (s += n)));
    pobiArr.push(pobiSum);

    const crongSum = (crong[1] + '')
      .split('')
      .map((v) => parseInt(v))
      .reduce((s, n) => (i > 0 ? (s *= n) : (s += n)));
    crongArr.push(crongSum);
  }

  const pobiMax = Math.max(...pobiArr);
  const crongMax = Math.max(...crongArr);

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
