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
function problem1(pobi, crong) {
  var answer;
  // 예외처리
  if(checkException(pobi) || checkException(crong))
    return -1;
  return answer;
}

module.exports = problem1;
