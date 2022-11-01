function problem5(money) {
  let answer =[];
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
    moneyArr.reduce((prev, divide)=>{ //reduce 함수 이용해서 각 배열값을 전부 사용
    answer.push(Math.floor(money/divide));//몫을 answer에 추가
    money %= divide; //다음 계산할 값은 이전 값을 뺀 것이므로 나머지로 초기화
  
  },[]) //초기배열은 [] 로 맞춰줌
 

  return answer;
}

module.exports = problem5;
