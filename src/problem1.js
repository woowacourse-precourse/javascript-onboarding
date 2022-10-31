function sumArray(arr) {
  let result = [];
  let index = 0;
  for (let i = 0; i < 4; i++) {
    i <= 1 ? (index = 0) : (index = 1);
    const sum = (arr[index] + '')
      .split('')
      .map((v) => parseInt(v))
      .reduce((s, n) => (i % 2 ? (s *= n) : (s += n)));
    result.push(sum);
  }
  return result;
}

function problem1(pobi, crong) {
  let answer = 0;

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  const pobiMax = Math.max(...sumArray(pobi));
  const crongMax = Math.max(...sumArray(crong));
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
