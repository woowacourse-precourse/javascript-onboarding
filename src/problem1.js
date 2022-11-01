let pobiMax = [];
let crongMax = [];

const exception = (pobi, crong) => {
  if (pobi[0] === "" || pobi[1] === "") return -1;
  if (crong[0] === "" || crong[1] === "") return -1;
  if (pobi[0] % 2 === 0 || pobi[1] % 2 !== 0) return -1;
  if (crong[0] % 2 === 0 || crong[1] % 2 !== 0) return -1;
  if (pobi.reduce((a, b) => Math.abs(a - b)) !== 1) return -1;
  if (crong.reduce((a, b) => Math.abs(a - b)) !== 1) return -1;
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
  return answer;
}

module.exports = problem1;
