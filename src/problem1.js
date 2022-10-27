function calc(page) {
  const mapNum = (arg) => Number(arg);
  let maxNum = 0;
  for (let item of page) {
    let numArr = Array.from(String(item), mapNum);
    let arrSum = numArr.reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    let arrMulti = numArr.reduce((acc, cur) => {
      return acc * cur;
    }, 1);
    maxNum = Math.max(arrMulti, arrSum, maxNum);
  }
  return maxNum;
}

function problem1(pobi, crong) {}

module.exports = problem1;
