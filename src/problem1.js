function problem1(pobi, crong) {
  if ((pobi[1] - pobi[0] > 1) || (crong[1] - crong[0] > 1)) return -1;

  const maxPobi = Math.max.apply(null, pobi.map(v => getMax(v)));
  const maxCrong = Math.max.apply(null, crong.map(v => getMax(v)));

  if (maxPobi > maxCrong) return 1
  else if (maxPobi < maxCrong) return 2
  else return 0
}

function getMax(v) {
  const add = String(v).split('').reduce((prev, curr) => +prev + +curr, 0);
  const multiply = String(v).split('').reduce((prev, curr) => +prev * +curr, 1);
  const max = Math.max(add, multiply);

  return max;
}

module.exports = problem1;
