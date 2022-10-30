//문제 5번 기능 목록
//지갑을 최대한 가볍게 하라.
//  2가지 기준 (1)동전보단 지폐, (2)지폐는 큰 단위가 우선적.
//초 를 입력값으로 주고, '몇일 몇시 몇분 몇초'인지 반환하는 문제랑 비슷한 듯.

//1. 입력값(money)을 50000, 10000, 5000, 1000, 500, 100, 50, 10, 1 의 순서대로 나눈다. 
//2. 위의 9가지 단위를 나누는 수로 하여, 몫을 result라는 배열에 하나씩 push.
function addWallet(money){ //지갑에 각 몇 개로 변환되는지 금액이 큰 순서대로 배열에 담아서 반환
  var moneyNum; //몇 개로 변환되는지
  var resultArray = []; //최종 결과
  var moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; //돈 단위
  for (i=0; i<moneyUnit.length; i++){
    var unit = moneyUnit[i]; //단위
    moneyNum = parseInt(money / unit); //해당 단위로 금액을 나눈 몫
    money = money % unit; //해당 단위로 금액을 나눈 나머지
    resultArray.push(moneyNum); //몇 개로 변환되는지 배열에 담기
  }
  return resultArray;
}

function problem5(money) {
  var answer;
  answer = addWallet(money);
  return answer;
}

//console.log(problem5(20211));
module.exports = problem5;
