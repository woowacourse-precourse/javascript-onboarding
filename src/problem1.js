function multDigit(num) {
  let n = num;
  let mult = 1;
  while (true) {
    mult *= n % 10;
    n = Math.floor(n / 10);
    if (n == 0) break;
  }
  return mult;
}

function sumDigit(num) {
  let n = num;
  let sum = 0;
  while (true) {
    sum += n % 10;
    n = Math.floor(n / 10);
    if (n == 0) break;
  }
  return sum;
}

function getMaxScore(arr) {
  return Math.max(multDigit(arr[0]), multDigit(arr[1]), sumDigit(arr[0]), sumDigit(arr[1]));
}

function problem1(pobi, crong) {
  if (pobi.length != 2) return -1
  if (crong.length != 2) return -1
  if (pobi[1] - pobi[0] != 1) return -1
  if (crong[1] - crong[0] != 1) return -1

  var answer;

  return answer;
}

module.exports = problem1;
