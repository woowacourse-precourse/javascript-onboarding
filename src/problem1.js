function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) return -1;
}

function calculateAdd(num) {
  let result = 0,
    str = num + "";
  [...str].forEach((s) => (result += Number(s)));
  return result;
}

function calculateMul(num) {
  let result = 1,
    str = num + "";
  [...str].forEach((s) => (result *= Number(s)));
  return result;
}

module.exports = problem1;
