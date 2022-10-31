function problem5(money) {
  var answer;

  if (violationChk(money)) {
    answer = counter(money);
  }

  return answer;
}

function violationChk(money) {
  return money >= 1 && money <= 1000000;
}

module.exports = problem5;
