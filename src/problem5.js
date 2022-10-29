/*
 기능 목록
  1) 오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전 각 몇 개로 변환되는지 구하는 기능
*/

function cashChange(c, m){
  let cash, t=[];
  for(let i=0; i<c.length; i++){
    cash=parseInt(m/c[i]);
    t[i]=cash;
    m=m-c[i]*cash;
  }
  return t;
}

function problem5(money) {
  var answer;
  let currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  answer = cashChange(currency, money);
  return answer;
}

module.exports = problem5;
