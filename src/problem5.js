function problem5(money) {
  var answer;

  //나눌 금액
  let div = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  //나눈 개수
  let cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (i = 0; i < div.length; i++) {
    if (parseInt(money / div[i]) > 0) {
      cnt[i] += parseInt(money / div[i]);
      money %= div[i];
    }
  }
  answer = cnt;
  return answer;
}

module.exports = problem5;
