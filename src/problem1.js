function calPlus(a) {
  var sum = 0;
  while (a > 0) {
    sum = sum + (a % 10);
    a = parseInt(a / 10);
  }
  return sum;
}
function calMultiply(a) {
  var mul = 1;
  while (a > 0) {
    mul = mul * (a % 10);
    a = parseInt(a / 10);
  }
  return mul;
}

function compareBig(a, b) {
  var left_big = calPlus(a) > calMultiply(a) ? calPlus(a) : calMultiply(a);
  var right_big = calPlus(b) > calMultiply(b) ? calPlus(b) : calMultiply(b);
  return left_big > right_big ? left_big : right_big;
}

function problem1(pobi, crong) {
  if (pobi[0] + 1 != pobi[1] || crong[0] + 1 != crong[1]) return -1;

  let pobiBig = compareBig(pobi[0], pobi[1]);
  let crongBig = compareBig(crong[0], crong[1]);

  if (pobiBig > crongBig) return 1;
  else if (pobiBig == crongBig) return 0;
  else if (pobiBig < crongBig) return 2;
}

module.exports = problem1;
