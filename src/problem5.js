function problem5(money) {
  var answer = [];
  let iter = 1;
  let bill = 50000; //화폐 단위
  while (bill >= 1) {
    answer.push(parseInt(money / bill));    // bill*몫 만큼 담을 수 있음
    money %= bill;  // money에 남은 돈 저장
    if (bill == 10) {   //화폐단위 : 50000,10000,5000,1000,500,100,50,10,1 으로 가도록 루프 유도
      bill /= 10;
    } else if (iter % 2 == 1) {
      bill /= 5;
    } else {
      bill /= 2;
    }
    iter += 1;
  }
  return answer;
}

module.exports = problem5;
