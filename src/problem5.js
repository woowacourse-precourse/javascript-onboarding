function problem5(money) {
  var answer;
  // 오만 원권부터 일원 동전까지 moneyArr에 넣음
  const moneyArr = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  // 결과값 저장을 위한 resultArr
  const resultArr = [];

  // moneyArr 처음부터 끝 까지 배열 돌림 -> 오만 원권 부터 일원 동전까지 검사 가능
  for (let i = 0; i < moneyArr.length; i++) {
    if (money >= moneyArr[i]) {
      resultArr.push(parseInt(money / moneyArr[i]));
      money = money - parseInt(money / moneyArr[i]) * moneyArr[i];
    } else resultArr.push(0);
  }

  answer = resultArr;
  return answer;
}

module.exports = problem5;
