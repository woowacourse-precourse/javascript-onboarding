function problem5(money) {
  // 결과를 담을 변수 선언
  let result = [];

  // 돈을 카운트해줄 배열 선언
  let moneyCount = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];


  // 반복문을 순회하면서 돈 카운트
  for (let i = 0; i < moneyCount.length; i++) {
    result.push(Math.floor(money / moneyCount[i]));
    money = money % moneyCount[i];
  }

  return result;
}

module.exports = problem5;
