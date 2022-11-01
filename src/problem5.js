function problem5(money) {
  // 화폐 단위 배열 선언
  let wonType = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let countArr = [];
  let restMoney = money;

  // 화폐 큰 단위 순서대로 나누고 나머지 넘기기
  for (let i = 0; i < wonType.length; i++) {
    countArr.push(Math.floor(restMoney / wonType[i]));
    restMoney = restMoney % wonType[i];
  }

  // 각 화폐당 변환 갯수 배열에 담기
  return countArr;
}

module.exports = problem5;
