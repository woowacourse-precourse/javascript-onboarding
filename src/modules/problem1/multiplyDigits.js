function multiplyDigits(pageNumber) {
  let product = 1;
  let tmp = pageNumber;
  while (tmp > 0) {
    product *= tmp % 10;
    tmp = Math.floor(tmp / 10);
  }
  return product;
}

module.exports = multiplyDigits;
