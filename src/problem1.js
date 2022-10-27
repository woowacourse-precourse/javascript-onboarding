function problem1(pobi, crong) {
  let answer;
  return answer;
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

module.exports = problem1;
