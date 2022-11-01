function problem5(money) {
  const kindOfMoney = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  const answer = Array(kindOfMoney.length).fill(0);
  /**
   * 앞선 변환 후 남은 돈이 0인지 확인해주는 함수
   * @param {number} money 
   * @returns {boolean}
   */
  const isLeftMoneyZero = money => money === 0;

  kindOfMoney.forEach((cur, idx) => {
    if (!isLeftMoneyZero()){
      answer[idx] = parseInt(money / cur);
      money %= cur;
    }
  });

  return answer;
}
module.exports = problem5;
