function problem1(pobi, crong) {
  let answer = 0;
  let [pobiLeft, pobiRight] = pobi;
  let [crongLeft, crongRight] = crong;

  let pobiValue = getMaxValue(splitNum(pobiLeft), splitNum(pobiRight));
  let crongValue = getMaxValue(splitNum(crongLeft), splitNum(crongRight));
  
  if (pobiValue > crongValue) answer = 1;
  if (pobiValue < crongValue) answer = 2;
  if (pobiValue === crongValue) answer = 0;

  if (pobiLeft < 1 || pobiRight < 1 || crongLeft < 1 || crongRight < 1) answer = -1
  if (pobiLeft > 400 || pobiRight > 400 || crongLeft > 400 || crongRight > 400) answer = -1
  if ((pobiRight - pobiLeft) !== 1 || (crongRight - crongLeft) !== 1) answer = -1
  if (pobiLeft % 2 !== 1 || crongLeft % 2 !== 1) answer = -1
  if (pobiRight % 2 !== 0 || crongRight % 2 !== 0) answer = -1
  return answer;
}

function getMaxValue(leftArr, rightArr) {
  let sum = sumPage(leftArr)
  let multi = multiplyPage(rightArr)
  return Math.max(sum, multi)
}

function splitNum(num) {
  let strNum = String(num);
  return strNum.split('').map(item => Number(item));
}

function sumPage(arr) {
  return arr.reduce((prev, curr) => prev + curr, 0) 
}

function multiplyPage(arr) {
  return arr.reduce((prev, curr) => prev * curr, 1)
}

module.exports = problem1;
