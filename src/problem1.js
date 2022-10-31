// 예외처리 함수
function checkException(player){
  if(player.some(elem => elem <= 2 || elem >= 399)) 
    return true;
  if(player.length != 2)
    return true; 
  if(player[1] - player[0] != 1)
    return true;
  if(player[0] % 2 == 0)
    return true;
  return false;
}
// 페이지 번호의 각 자리 숫자를 모두 더한 값을 구하는 함수
function returnSum(pageNum){
  let tmp = 0;
  while(pageNum){
    tmp += pageNum % 10;
    // parseInt, Math.floor 보다 ~~ 연산의 속도가 더 빠름
    pageNum = ~~(pageNum / 10);
  } 
  return tmp;
}
// 페이지 번호의 각 자리 숫자를 모두 곱한 값을 구하는 함수
function returnMult(pageNum){
  let tmp = 1;
  while(pageNum){
    tmp *= pageNum % 10;
    pageNum = ~~(pageNum / 10);
  } 
  return tmp;
}
function returnMaxScore(player){
  return Math.max(returnSum(player[0]), returnMult(player[0]), returnSum(player[1]), returnMult(player[1]))
}
function problem1(pobi, crong) {
  var answer;
  // 예외처리
  if(checkException(pobi) || checkException(crong))
    return -1;
  let pobiScore = returnMaxScore(pobi);
  let crongScore = returnMaxScore(crong)
  
  return answer;
}

module.exports = problem1;
