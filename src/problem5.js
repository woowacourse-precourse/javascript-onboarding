function isValid(money) {
  const regex = /^[1-9][0-9]*$/;

  if (money < 1 || money > 1000000 || !regex.test(money)) {
    throw "1 이상 1,000,000 이하로 입력해주세요";
  }
}

function problem5(money) {
  let answer = [];
  isValid(money);
  return answer;
}

module.exports = problem5;
