/*
function problem5(money) {
  var answer;
  return answer;
}

module.exports = problem5;
*/

// money가 제한사항을 만족하는지 
function checkMoney(m){
  if (m<1 || m>1000000){return true;}
  return false;
}
