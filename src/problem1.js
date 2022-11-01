/* 
1. 페이지 더한 값, 곱한값
2. 더한 값, 곱한 값 중 큰 수 구하기
3. 승부 결정하기 
*/
function problem1(pobi, crong) {
  let answer = 0;
  let [pobiLeft, pobiRight] = pobi;
  let [crongLeft, crongRight] = crong;

  let pobiValue = getMaxValue(splitNum(pobiLeft), splitNum(pobiRight));
  let crongValue = getMaxValue(splitNum(crongLeft), splitNum(crongRight));
  
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
