const errorHandler = (pobi, crong) => {
  let error = false;
  if ([pobi, crong].some((user) => user.length !== 2)) error = true;
  else {
    if ([...pobi, ...crong].some((value) => value <= 1 || value >= 400))
      error = true;
    if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) error = true;
  }
  return error;
};

const getSum = (number) => {
  return String(number)
    .split("")
    .reduce((sum, str) => (sum += +str), 0);
};

const getMultiply = (number) => {
  return String(number)
    .split("")
    .reduce((total, str) => (total *= +str), 1);
};

const getMax = (...args) => Math.max(...args, 0);

function problem1(pobi, crong) {
  if (errorHandler(pobi, crong)) return -1;

  const [pLeft, pRight] = pobi;
  const [cLeft, cRight] = crong;

  const pMax = getMax(
    getSum(pLeft),
    getMultiply(pLeft),
    getSum(pRight),
    getMultiply(pRight)
  );
  const cMax = getMax(
    getSum(cLeft),
    getMultiply(cLeft),
    getSum(cRight),
    getMultiply(cRight)
  );

  if (pMax > cMax) return 1;
  else if (pMax < cMax) return 2;
  else return 0;
}

module.exports = problem1;
