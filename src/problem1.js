function findMax(num) {
  const ones = num % 10;
  const tens = ((num % 100) - (num % 10)) / 10;
  const hundreds = ((num % 1000) - (num % 100)) / 100;

  const sum = ones + tens + hundreds;
  const sumProduct =
    hundreds == 0 ? (tens == 0 ? ones : tens * ones) : hundreds * tens * ones;
  return sum > sumProduct ? sum : sumProduct;
}
function problem1(pobi, crong) {
  var answer;
  if (pobi[0] < 1 || pobi[0] > 399 || pobi[0] % 2 == 0) return -1;
  if (pobi[1] < 2 || pobi[1] > 400 || pobi[1] % 2 == 1) return -1;
  if (crong[0] < 1 || crong[0] > 399 || crong[0] % 2 == 0) return -1;
  if (crong[1] < 2 || crong[1] > 400 || crong[1] % 2 == 1) return -1;
  if (pobi[1] - pobi[0] != 1 || crong[1] - crong[0] != 1) return -1;
  const maxPobi = Math.max(findMax(pobi[0], pobi[1]));
  const maxCrong = Math.max(findMax(crong[0], crong[1]));
  if (maxPobi > maxCrong) answer = 1;
  else if (maxPobi < maxCrong) answer = 2;
  else answer = 0;
  return answer;
}

module.exports = problem1;
