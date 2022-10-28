function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) return -1;
  const getLarge = (num) => {
    const arr = String(num)
      .split("")
      .map((el) => Number(el));
    return Math.max(
      arr.reduce((a, b) => a + b, 0),
      arr.reduce((a, b) => a * b, 1)
    );
  };
  const pobiMax = Math.max(...pobi.map((el) => getLarge(el)));
  const crongMax = Math.max(...crong.map((el) => getLarge(el)));

  if (pobiMax > crongMax) return 1;
  else if (pobiMax < crongMax) return 2;
  else if (pobiMax === crongMax) return 0;
}

module.exports = problem1;
