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

const getMax = (...args) => Math.max(...args);

function problem1(pobi, crong) {
  const [pLeft, pRight] = pobi;
  const [cLeft, cRight] = crong;
  if (pRight - pLeft !== 1 || cRight - cLeft !== 1) return -1;

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
