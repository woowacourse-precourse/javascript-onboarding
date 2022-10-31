function problem5(money) {
  var answer=solution(money);
  return answer;
}

module.exports = problem5;


// money가 제한사항을 만족하는지 
function checkMoney(m){
  if (m<1 || m>1000000){return true;}
  return false;
}

function solution(m){
  if(checkMoney(m)) return [,,,,,,,,];

  let unitArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let resultArr = [,,,,,,,,];
  
  for(let i=0;i<unitArr.length; i++){
    result = parseInt(m/unitArr[i]); //몫
    resultArr[i]=result;

    remainder=m%unitArr[i]; //나머지
    m=remainder; 
  }
}
