function problem5(money) {
  const currency = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = [];

  const currentMoney = [];
  currentMoney.push(money);

  for(const item of currency){
    const result = (currentMoney[0] -(currentMoney[0] % item))/item;
    answer.push(result);
    currentMoney.push(currentMoney[0] - item * result)
    currentMoney.shift();
    }  
return answer;
}

module.exports = problem5;

//problem5 기능 목록
//[x] 사용할 화폐 단위를 모두 저장한 배열 currency를 생성한다.
//[x] 빈 배열 answer와 currentMoney를 생성한다.
//[x] currentMoney에 출금할 금액인 money의 값을 저장한다.
//[x] 큰 화폐단위부터 시작하여 필요한 최대 매수를 계산한다.
//[x] 계산을 마친 화폐단위*장수만큼의 금액을 차감한 값을 현재 금액으로 저장한다.
//[x] 이를 반복하여 각 화폐의 필요 매수를 구한 후, 결과를 answer에 저장한다.
//[x] answer를 반환한다.