function problem5(money) {
  var answer = [];
  const deviders = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  for (let devider of deviders) {
    answer.push(parseInt(money / devider));

    money = money % devider;
  }
  return answer;
}

console.log(problem5(15000));
