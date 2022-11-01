function problem1(pobi, crong) {
  if(judgeCorrectPage(pobi) === -1 || judgeCorrectPage(crong) === -1)
    return -1;
  let pobiMaxNum = compareLeftAndRightPageNum(pobi);
  let crongMaxNum = compareLeftAndRightPageNum(crong);
  return compareEachMaxNum(pobiMaxNum, crongMaxNum);
}

function compareSumAndMultiple(num){
  let numOfDigits = num.toString().split("").map(x=>parseInt(x));
  let digitsSum = numOfDigits.reduce((acc, cur) => acc + cur);
  let digitsMultiple = numOfDigits.reduce((acc, cur) => acc * cur);
  return digitsSum >= digitsMultiple ? digitsSum : digitsMultiple;
}

function compareLeftAndRightPageNum(pageNumArr){
  let leftPageNum = pageNumArr[0];
  let rightPageNum = pageNumArr[1];
  let leftMaxNum = compareSumAndMultiple(leftPageNum);
  let rightMaxNum = compareSumAndMultiple(rightPageNum);
  return leftMaxNum >= rightMaxNum ? leftMaxNum : rightMaxNum;
}

function compareEachMaxNum(pobiMaxNum, crongMaxNum){
  if(pobiMaxNum > crongMaxNum)
    return 1;
  if(pobiMaxNum = crongMaxNum)
    return 0;
  if(pobiMaxNum < crongMaxNum)
    return 2;
}

function judgeCorrectPage(pageNumArr){
  let leftPageNum = pageNumArr[0];
  let rightPageNum = pageNumArr[1];
  if(leftPageNum < 1 || rightPageNum > 400)
    return -1;
  if(rightPageNum - leftPageNum !== 1)
    return -1;
}

module.exports = problem1;
