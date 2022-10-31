function problem1(pobi, crong) {
  let answer = 0;

  if (
    pobi[1] - pobi[0] !== 1 ||
    crong[1] - crong[0] !== 1 ||
    pobi[0] === 1 ||
    crong[0] === 1
  )
    return -1;
  if (pobi[0] % 2 === 0) return -1;
  if (pobi[0] === 1) return -1;
  if (pobi[1] === 400) return -1;
  return answer;
}

module.exports = problem1;
