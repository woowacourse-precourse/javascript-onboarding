function problem1(pobi, crong) {
  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  const pobiMaxNum = Math.max(...pobi.map((num) => calculateMaxNum(num)));
  const crongMaxNum = Math.max(...crong.map((num) => calculateMaxNum(num)));
  console.log(pobiMaxNum);
  console.log(crongMaxNum);

  if (pobiMaxNum > crongMaxNum) return 1;
  else if (pobiMaxNum < crongMaxNum) return 2;
  else return 0;
}

function calculateMaxNum(num) {
  const numArr = num.toString().split("");
  const plusNum = numArr.reduce((acc, cur) => acc + Number(cur), 0);
  const multiplyNum = numArr.reduce((acc, cur) => acc * Number(cur), 1);
  return Math.max(plusNum, multiplyNum);
}
problem1([97, 98], [101, 102]);
console.log("체크", problem1([97, 98], [101, 102]));
module.exports = problem1;
