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
