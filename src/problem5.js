function problem5(money) {
  let answer = [];
  const cash = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  cash.map((item, i) => {
    answer.push(Math.floor(money / item));
    money = money % item;
  });
  // console.log(answer);

  return answer;
}
// problem5(15000);

module.exports = problem5;
