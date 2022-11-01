/*
  기능목록
  1. 화폐 단위를 moneyStandard 배열에 저장
  2. 큰값부터 나누어 큰 금액의 화폐를 우선하여 결과배열에 담는다.
*/

function problem5(money) {
  let answer = [];
  let moneyStandard = [50000,10000,5000,1000,500,100,50,10,1];

  moneyStandard.map((standard)=> {
    answer.push(parseInt(money/standard));
    if(parseInt(money/standard)) money -=  (standard * parseInt(money/standard));
  })

  return answer;
}

module.exports = problem5;
