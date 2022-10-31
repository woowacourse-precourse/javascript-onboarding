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
