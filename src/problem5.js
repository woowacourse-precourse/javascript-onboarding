/*
[기능 목록]
1. 화폐단위로 입력값을 큰 단위부터 나누기

오만 원권, 만 원권, 오천 원권, 천 원권, 오백원 동전, 백원 동전, 오십원 동전, 십원 동전, 일원 동전
*/



function divideMoneyType(money){
  let money_type = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let result = [0,0,0,0,0,0,0,0,0];
  for(let i = 0; i < money_type.length; i++){
    let temp = parseInt(money / money_type[i]);
    if(temp >= 1){
      result[i] = temp;
      money -= temp*money_type[i];
    }
  }
  return result;
}


function problem5(money) {
  let answer;
  answer = divideMoneyType(money);
  return answer;
}


module.exports = problem5;
