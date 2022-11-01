function sumDigits(pageNumber) {
  let sum = 0;
  let tmp = pageNumber;
  while (tmp > 0) {
    sum += tmp % 10;
    tmp = Math.floor(tmp / 10);
  }
  return sum;
}

module.exports = sumDigits;
