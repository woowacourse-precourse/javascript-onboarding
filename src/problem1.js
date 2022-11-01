function check(pages) {
  const [left, right] = pages;
  if (1 <= left && left < 400 && right-left === 1) {
    return true;
  }
}

function calculate(pages) {
  const [left, right] = pages;
  const sumLeftNum = String(left).split('').reduce((acc, cur) => acc + cur * 1, 0);
  const sumRightNum = String(right).split('').reduce((acc, cur) => acc + cur * 1, 0);
  const multiLeftNum = String(left).split('').reduce((acc, cur) => acc * cur);
  const multiRightNum = String(right).split('').reduce((acc, cur) => acc * cur);

  return Math.max(sumLeftNum, sumRightNum, multiLeftNum, multiRightNum);
}

function problme1(pobi, crong) {
  if (!check(pobi) || !check(crong)){
      return -1;
  }
  
  const pobiScore = calculate(pobi);
  const crongScore = calculate(crong);

  if (pobiScore > crongScore) {
      return 1
  }
  if (pobiScore < crongScore) {
      return 2
  }
  else {
      return 0
  }
}

module.exports = problme1;