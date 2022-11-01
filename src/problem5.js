function problem5(money) {
  var answer = [];
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  // 나누기한 값을 정수화하여 단위화폐의 개수 계산
  for (let i = 0; i < units.length; i++) {
    answer.push(parseInt(money / units[i]));
    money = money % units[i];
  }

  return answer;
}

module.exports = problem5;
