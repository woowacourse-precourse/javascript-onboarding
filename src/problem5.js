function problem5(money) {
  const unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  let answer = [];
  for (i=0;i<9;i++){
    answer.push(parseInt(money/unit[i]));
    money=money%unit[i];
  }
  return answer;
}

module.exports = problem5;