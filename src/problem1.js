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

function handleException(pages) {
  const [leftPage, rightPage] = pages;

  const checkRange = (page) => {
    if (page < 1 || page > 400) return false;
    return true;
  };

  if (!checkRange(leftPage) || !checkRange(rightPage)) return true;
  if (leftPage >= rightPage || rightPage - leftPage !== 1) return true;
  if (leftPage % 2 == 0) return true;
  return false;
}

function problem1(pobi, crong) {}

module.exports = problem1;
