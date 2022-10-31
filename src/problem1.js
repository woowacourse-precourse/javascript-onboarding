const getSum = (number) => {
  return String(number)
    .split("")
    .reduce((sum, str) => (sum += +str), 0);
};

