function problem1(pobi, crong) {
  if ( !isValid(pobi) || !isValid(crong) ) {
    return -1;
  }

}
function isValid(arr) {
  let left = arr[0];
  let right = arr[1];

  if ( left % 2 == 0) {
    return false;
  }

  return right - left == 1;
}
function calculate(arr) {
  let leftAdd = 0;
  let leftMultiply = 1;
  let rightAdd = 0;
  let rightMultiply = 1;
  
  let left = String(arr[0]);
  [...left].forEach(char => {
    leftAdd += parseInt(char);
    leftMultiply *= parseInt(char);
  })

  let leftResult = Math.max(leftAdd, leftMultiply);
  
  let right = String(arr[1]);
  [...right].forEach(char => {
    rightAdd += parseInt(char);
    rightMultiply *= parseInt(char);
  })

  let rightResult = Math.max(rightAdd, rightMultiply);

  return Math.max(leftResult, rightResult);
}
module.exports = problem1;
