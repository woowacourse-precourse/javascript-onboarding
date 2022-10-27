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

function problem1(pobi, crong) {
  let answer;

  if(isException(pobi)||isException(crong)) return -1;
  
  return answer;
}

module.exports = problem1;