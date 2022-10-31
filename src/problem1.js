function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }
}

const calculateMaxNum = (num) => {
  const numArr = num.toString().split("");
  const plusNum = numArr.reduce((acc, cur) => acc + Number(cur), 0);
  const multiplyNum = numArr.reduce((acc, cur) => acc * Number(cur), 1);
};

module.exports = problem1;
