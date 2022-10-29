function isEven(num) {
  return num%2 === 0;
}

function isOdd(num) {
  return num%2 === 1;
}

function pageRule(pages) {
  const left = pages[0];
  const right = pages[1];

  if(right - left !== 1) return false; // '오른쪽 페이지 번호 - 왼쪽 페이지 번호'가 1이 아닐 경우 'false' 리턴
  if(!isOdd(left)) return false; // 왼쪽페이지가 홀수가 아닐 경우 'false' 리턴
  if(!isEven(right)) return false; // 오른쪽페이지가 짝수가 아닐 경우 'false' 리턴

  return true;
}

function getBiggestNumber(num) {
  const digits = num.toString().split('');
  const realDigits = digits.map(Number);
  
  const sum = realDigits.reduce((a,b) => a + b, 0)
  const multiply = realDigits.reduce((a,b) => a * b, 1)
  return Math.max(sum, multiply)
}

function getMaxScore(array) {
  const leftPage = array[0];
  const rightPage = array[1];
  return Math.max(getBiggestNumber(leftPage), getBiggestNumber(rightPage));
}

function problem1(pobi, crong) {
  if(!pageRule(pobi) || !pageRule(crong)) return -1;
}

module.exports = problem1;
