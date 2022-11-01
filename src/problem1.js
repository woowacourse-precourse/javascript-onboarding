function problem1(pobi, crong) {
  const sum = (num) => {
    let sum = 0;
    num
      .toString()
      .split('')
      .forEach((item) => (sum += +item));
    return sum;
  };
  const multi = (num) => {
    let multi = 1;
    num
      .toString()
      .split('')
      .forEach((item) => (multi *= +item));
    return multi;
  };

  const pobiMax = Math.max(
    sum(pobi[0]),
    sum(pobi[1]),
    multi(pobi[0]),
    multi(pobi[1])
  );
  const crongMax = Math.max(
    sum(crong[0]),
    sum(crong[1]),
    multi(crong[0]),
    multi(crong[1])
  );

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  } else if (pobiMax > crongMax) {
    return 1;
  } else if (pobiMax < crongMax) {
    return 2;
  } else if (pobiMax === crongMax) {
    return 0;
  }
}

module.exports = problem1;
