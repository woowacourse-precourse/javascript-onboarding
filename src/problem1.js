function problem1(pobi, crong) {
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

module.exports = problem1;
