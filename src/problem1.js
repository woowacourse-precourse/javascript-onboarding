function problem1(pobi, crong) {
  const POBI_MAX = Math.max(...pobi.map((num) => calculateMaxNum(num)));
  const CRONG_MAX = Math.max(...crong.map((num) => calculateMaxNum(num)));

  if (pobi[1] - pobi[0] !== 1 || crong[1] - crong[0] !== 1) {
    return -1;
  }

  if(POBI_MAX > CRONG_MAX) {
    return 1;
  } else if(POBI_MAX < CRONG_MAX) {
    return 2;
  } else{
    return 0;
  }
}

const calculateMaxNum = (pages) => {
  const numArr = pages.toString().split("");
  const plus = numArr.reduce((previousValue, currentValue) => previousValue + Number(currentValue), 0);
  const multiply = numArr.reduce((previousValue, currentValue) => previousValue * Number(currentValue), 1);
  return Math.max(plus, multiply);
};

module.exports = problem1;
