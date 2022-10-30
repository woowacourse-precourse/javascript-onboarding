function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) return -1;

  let pobiMax = 0,
    crongMax = 0;

  for (let i = 0; i < pobi.length; i++) {
    pobiMax = Math.max(calculateAdd(pobi[i]), calculateMul(pobi[i]));
    crongMax = Math.max(calculateAdd(crong[i]), calculateMul(crong[i]));
  }

  if (pobiMax > crongMax) {
    return 1;
  } else if (pobiMax < crongMax) {
    return 2;
  } else {
    return 0;
  }
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
