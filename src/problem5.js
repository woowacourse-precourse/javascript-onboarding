function problem5(money) {

  // 화폐 단위를 배열로 생성
  let moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

  // 결괏값을 담아줄 빈 배열 생성
  let result = []; 

  // 화폐 단위 별로 몇 개가 변환되는 지 금액이 큰 순서대로 변환
  for(let i = 0; i < moneyArr.length; i++) {
    result.push(Math.floor(money / moneyArr[i]));
    money =  money % moneyArr[i];
  }

  // 최종 결괏값 리턴
  return result;
}

module.exports = problem5;
