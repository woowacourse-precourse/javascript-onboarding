function isInvalidArgument(pobi, crong) {
  if (pobi[0] < 2 || pobi[1] > 399 || crong[0] < 2 || crong[1] > 399) return 1;
  if (
    pobi[0] % 2 != 1 ||
    pobi[1] % 2 != 0 ||
    crong[0] % 2 != 1 ||
    crong[1] % 2 != 0
  )
    return 1;
  if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) return 1;
  return 0;
}

function calculMax(page) {
  let sum = 0;
  let mul = 1;
  let max = [];

  for (i = 0; i < 2; i++) {
    page[i] = page[i].toString();
    for (j = 0; j < page[i].length; j++) {
      sum += Number(page[i][j]);
    }
    for (j = 0; j < page[i].length; j++) {
      mul *= Number(page[i][j]);
    }
    max[i] = sum < mul ? mul : sum;
    sum = 0;
    mul = 1;
  }
  return Math.max(...max);
}

function problem1(pobi, crong) {
  let p_max = 0;
  let c_max = 0;

  if (isInvalidArgument(pobi, crong)) return -1;

  p_max = calculMax(pobi);
  c_max = calculMax(crong);

  if (p_max > c_max) return 1;
  if (c_max > p_max) return 2;
  return 0;
}

module.exports = problem1;
