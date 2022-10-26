// 입력값의 예외처리 (페이지가 연속되지 않는 경우)
const checkValid = (arr1, arr2) => {
    let flag = true;
    if(arr1[1] - arr1[0] !== 1 || arr2[1] - arr2[0] !== 1) {
        flag = false;
    } 
    return flag;
}

// 각 자리 숫자를 더하는 기능
const sumAllDigit = (num) => {
  let numArr = String(num).split("").map(x=>+x);
  return numArr.reduce((acc, cur) => acc + cur, 0);
}

function problem1(pobi, crong) {
  let result;
  if(!checkValid(pobi, crong)) result = -1;
  return result;
}

module.exports = problem1;
