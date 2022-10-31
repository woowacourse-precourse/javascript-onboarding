function problem5(money) {
  let answer = [];

  const array = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let coin of array) {
    answer.push(Math.floor(money / coin)); //동전의 개수
    money -= coin * Math.floor(money / coin); // 남은 돈 계산
  }
  return answer;
}


module.exports = problem5;
