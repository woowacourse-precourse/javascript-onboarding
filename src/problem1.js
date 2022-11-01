const isOutOfRange = (num) => {
  if(num===1||num===399) return true;
  return false;
}

const isNonSeriesArray = ([prev,next]) => {
  if(next-prev===1) return false;
  return true;
}

const isOdd= (num)=> num % 2

function isException(arr) {
  if(isOutOfRange(arr[0])||isOutOfRange(arr[1])) return true;
  if(isNonSeriesArray(arr)) return true;
  if(!isOdd(arr[0])) return true;
  return false;
}

const getMaxValue = (arr) => {
  const splitNumArr =arr.map((page)=>page.toString().split("").map((item)=>Number(item)));
  const sumArr = splitNumArr.map((item)=>item.reduce((previousValue, currentValue) => previousValue + currentValue, 0))
  const multipleArr = splitNumArr.map((item)=>item.reduce((previousValue, currentValue) => previousValue * currentValue, 1));
  return Math.max(...sumArr,...multipleArr);
}

function problem1(pobi, crong) {
  let answer = 0;

  if(isException(pobi)||isException(crong)) return -1;
  
  const pobiMax = getMaxValue(pobi);
  const crongMax = getMaxValue(crong);
  if(pobiMax > crongMax) return 1;
  if(pobiMax < crongMax) return 2;
  return answer;
}

module.exports = problem1;