function book () { 
  let bookNumber = Math.floor(Math.random()*396)+3;  // 3~398 까지 펼치기
  return bookNumber
}
function leftRightPage() {
  book();
  if (bookNumber % 2 == 1){
    let left = bookNumber; // 왼쪽 홀수, 오른쪽 짝수
    let right = left + 1;
    return left , right;
  }
  else if (bookNumber % 2 == 0){
    let right = bookNumber;
    let left = right - 1;
    return left , right;
  }  
}
function addMultiNumber(side) { // 각 자리수 더하기 , 곱하기
  leftRightPage();
  let addNum = 0;
  let numberStr = String(side);
  for (let i = 0; i<side.length; i++){
    addNum += parseInt(numberStr[i]);
  }
  let multiNum = 0;
  for (let i = 0; i<side.length; i++){
    multiNum *= parseInt(numberStr[i]);
  }
  return addNum , multiNum
}

function problem1(pobi, crong) {
  var answer;
  return answer;
}

module.exports = problem1;
