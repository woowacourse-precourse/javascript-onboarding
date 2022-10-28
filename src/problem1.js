function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  const pobiMaxNum = Math.max(...pobi.map((num) => calculateMaxNum(num)));
  const crongMaxNum = Math.max(...crong.map((num) => calculateMaxNum(num)));

  if (pobiMaxNum > crongMaxNum) return 1;
  else if (pobiMaxNum < crongMaxNum) return 2;
  else return 0;
}

const calculateMaxNum = (num) => {
  const numArr = num.toString().split("");
  const plusNum = numArr.reduce((acc, cur) => acc + Number(cur), 0);
  const multiplyNum = numArr.reduce((acc, cur) => acc * Number(cur), 1);
  return Math.max(plusNum, multiplyNum);
};

module.exports = problem1;
