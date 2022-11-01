function problem5(money) {
  var answer;

  try {
    // 주어진 범위가 아니라면 에러를 던진다.
    if (money > 1000000 || money < 1) {
      throw new Error('money must between(1, 1,000,000)');
    }

    // 화폐의 단위
    const moneys = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

    let restMoney = money;

    // 배열을 순회하며 최대금액부터 뺴주면서 최소로 돈을 갖도록 한다
    answer = moneys.map((value) => {
      let count = 0;
      // 지금 확인하는 화페단위보다 작다면 아래 단위로 넘어간다.
      while (restMoney >= value) {
        restMoney -= value;
        count += 1;
      }
      return count;
    });
  } catch (e) {
    answer = -1;
  }

  return answer;
}

problem5(100000);

module.exports = problem5;
