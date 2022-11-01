/*
 #기능 요구 사항
돈의 액수 money가 매개변수로 주어질 때, 
오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 
백원 동전, 오십원 동전, 십원 동전, 일원 동전 각 몇 개로 
변환되는지 금액이 큰 순서대로 배열에 담아 return 하도록 solution 메서드를 완성.

1. 주어진 금액을 가장 큰 단위의 화폐부터 작은 단위의 화폐로 가장 많이 포함되도록 한다.

*/

function problem5(money) {
  let answer;
  answer = solution(money);
  return answer;
}

/*주어진 금액을 가장 큰 단위의 화폐부터 작은 단위의 화폐로 가장 많이 포함되도록 한다.*/
function solution(money) {
    
  const price = [50000,10000,5000,1000,500,100,50,10,1];
  const result = new Array(9);

  for(let i = 0 ; i< result.length; i++) {
      result[i] = parseInt(money/price[i]);
      money = money - parseInt(money/price[i]) * price[i];
  }

  return result;
}

module.exports = problem5;
