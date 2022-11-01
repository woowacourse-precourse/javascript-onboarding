const FIFTYTHOUSAND = 50000;
const TENTHOUSAND = 10000;
const FIVETHOUSAND = 5000;
const THOUSAND = 1000;
const FIVEHUNDRED = 500;
const HUNDRED = 100;
const FIFTY = 50;
const TEN = 10;

function problem5(money) {
  const bill50000 = exchangeTo50000(money);
  money -= FIFTYTHOUSAND * bill50000;

  const bill10000 = exchangeTo10000(money);
  money -= TENTHOUSAND * bill10000;

  const bill5000 = exchangeTo5000(money);
  money -= FIVETHOUSAND * bill5000;

  const bill1000 = exchangeTo1000(money);
  money -= THOUSAND * bill1000;

  const bill500 = exchangeTo500(money);
  money -= FIVEHUNDRED * bill500;

  const bill100 = exchangeTo100(money);
  money -= HUNDRED * bill100;

  const bill50 = exchangeTo50(money);
  money -= FIFTY * bill50;

  const bill10 = exchangeTo10(money);
  money -= TEN * bill10;

  const bill1 = exchangeTo1(money);
  
  return [bill50000, bill10000, bill5000, bill1000, bill500, bill100, bill50, bill10, bill1];
}

function exchangeTo50000(money) {
  return Math.floor(money/FIFTYTHOUSAND);
}

function exchangeTo10000(money) {
  return Math.floor(money/TENTHOUSAND);
}

function exchangeTo5000(money) {
  return Math.floor(money/FIVETHOUSAND);
}

function exchangeTo1000(money) {
  return Math.floor(money/THOUSAND);
}

function exchangeTo500(money) {
  return Math.floor(money/FIVEHUNDRED);
}

function exchangeTo100(money) {
  return Math.floor(money/HUNDRED);
}

function exchangeTo50(money) {
  return Math.floor(money/FIFTY);
}

function exchangeTo10(money) {
  return Math.floor(money/TEN);
}

function exchangeTo1(money) {
  return money
}

module.exports = problem5;
