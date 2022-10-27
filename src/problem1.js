function problem1(pobi, crong) {
  const pobiScore = [];
  const crongScore = [];

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  pobi.forEach((num) => {
    const numArr = num.toString().split("");
    const plusNum = numArr.reduce((acc, cur) => acc + Number(cur), 0);
    const multiplyNum = numArr.reduce((acc, cur) => acc * Number(cur), 1);

    pobiScore.push(Math.max(plusNum, multiplyNum));
  });

  const pobiMaxNum = Math.max(...pobiScore);

  crong.forEach((num) => {
    const numArr = num.toString().split("");
    const plusNum = numArr.reduce((acc, cur) => acc + Number(cur), 0);
    const multiplyNum = numArr.reduce((acc, cur) => acc * Number(cur), 1);

    crongScore.push(Math.max(plusNum, multiplyNum));
  });

  const crongMaxnum = Math.max(...crongScore);

  if (pobiMaxNum > crongMaxnum) return 1;
  else if (pobiMaxNum < crongMaxnum) return 2;
  else return 0;
}

module.exports = problem1;
