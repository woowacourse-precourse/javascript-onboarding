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

function problem1(pobi, crong) {
  if(!pageRule(pobi) || !pageRule(crong)) return -1;
}

module.exports = problem1;
