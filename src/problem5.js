function problem5(money) {
  // 제한사항 만족하는지 체크
  if(/[^0-9]/g.test(money) || money < 1 || money > 1000000 || money % 1 !== 0) return false;
}

module.exports = problem5;
