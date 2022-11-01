const getDigitFromNum = (num) => {
  const digitList = [];
  while (num > 0) {
    rest = num % 10;
    num = parseInt(num / 10);
    digitList.push(rest);
  }
  return digitList;
};

module.exports = { getDigitFromNum };
