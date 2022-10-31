function problem5(money) {
  //화폐 단위, 정답 배열화
  const MoneyArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];

  // 화폐단위에 맞게 나누기 진행 후, 몫 배열에 삽입 및 반복
  for (let i of MoneyArray) {
    answer.push(Math.floor(Changes / i));
    Changes = Changes % i;
  }

  return answer;
}

module.exports = problem5;
