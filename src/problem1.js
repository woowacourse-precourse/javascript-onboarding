function problem1(pobi, crong) {
  var answer;
  if (pobi[0] < 1 || pobi[0] > 399 || pobi[0] % 2 == 0) return -1;
  if (pobi[1] < 2 || pobi[1] > 400 || pobi[1] % 2 == 1) return -1;
  if (crong[0] < 1 || crong[0] > 399 || crong[0] % 2 == 0) return -1;
  if (crong[1] < 2 || crong[1] > 400 || crong[1] % 2 == 1) return -1;
  if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) return -1;
  return answer;
}

module.exports = problem1;
