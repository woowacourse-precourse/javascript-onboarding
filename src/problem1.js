let pobiMax = [];
let crongMax = [];

const exception = (pobi, crong) => {
  if (pobi[0] === 1 || pobi[0] === 399 || crong[0] === 1 || crong[0] === 399)
    return -1;
  if (pobi.reduce((a, b) => Math.abs(a) - b) !== -1) return -1;
  if (crong.reduce((a, b) => Math.abs(a) - b) !== -1) return -1;
};

const calulateMax = (array, plus, multiplication, pobi) => {
  plus > multiplication
    ? array === pobi
      ? pobiMax.push(plus)
      : crongMax.push(plus)
    : array === pobi
    ? pobiMax.push(multiplication)
    : crongMax.push(multiplication);
};

const getMaxNumber = (array, pobi) => {
  array.forEach((page) => {
    let plus = Object.values(String(page)).reduce((a, b) => +a + +b);
    let multiplication = Object.values(String(page)).reduce((a, b) => +a * +b);
    calulateMax(array, plus, multiplication, pobi);
  });
};

function problem1(pobi, crong) {
  pobiMax, (crongMax = []);
  if (exception(pobi, crong) === -1) return -1;
  getMaxNumber(pobi, pobi);
  getMaxNumber(crong, pobi);
  return undefined;
}

module.exports = problem1;
