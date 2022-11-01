function withdraw(money, unit) {
  //화폐 단위에 따른 출금 개수 지정 시 잔고 수정 함수
  return money - parseInt(money / unit) * unit;
}

function problem5(money) {
  var answer;
  answer = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //화폐 단위 별 출금 개수
  moneyUnit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]; //화폐 단위

  for (let i = 0; i < moneyUnit.length; i++) {
    //화폐 단위 수 만큼 반복문을 수행하며
    if (money >= moneyUnit[i]) {
      //현재 잔고가 화폐 단위보다 크다면
      answer[i] = parseInt(money / moneyUnit[i]); //결과 배열에 해당 화폐 단위를 최대로 출금할 수 있는 만큼 추가
      money = withdraw(money, moneyUnit[i]); //출금 개수 연산 후 잔고를 수정한다.
    }
  }
  return answer;
}

module.exports = problem5;
