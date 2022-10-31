function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] > 1 || crong[1] - crong[0] > 1) return -1;
  if (pobi.filter((x) => x <= 1 || x >= 400).length > 0) return -1;
  if (crong.filter((x) => x <= 1 || x >= 400).length > 0) return -1;
  function Sum(num) {
    let sum = 0;
    num
      .toString()
      .split("")
      .forEach((x) => (sum += +x));
    return sum;
  }

  function Mul(num) {
    let mul = 1;
    num
      .toString()
      .split("")
      .forEach((x) => (mul *= +x));
    return mul;
  }

  const pobiNum = Math.max(
    Sum(pobi[0]),
    Sum(pobi[1]),
    Mul(pobi[0]),
    Mul(pobi[1])
  );
  const crongNum = Math.max(
    Sum(crong[0]),
    Sum(crong[1]),
    Mul(crong[0]),
    Mul(crong[1])
  );

  if (pobiNum > crongNum) {
    return 1;
  } else if (pobiNum < crongNum) {
    return 2;
  } else if (pobiNum === crongNum) {
    return 0;
  }
}
module.exports = problem1;
