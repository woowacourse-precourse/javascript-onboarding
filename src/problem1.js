function problem1(pobi, crong) {
  let answer = 0;
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;

  for (let i of pobi) {
    if (i < 3 || i > 398) return -1;
  }

  for (let i of crong) {
    if (i < 3 || i > 398) return -1;
  }

  return answer;
}

module.exports = problem1;
