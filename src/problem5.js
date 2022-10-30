function problem5(money) {
  const denominationsArray = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  let answer = Array(denominationsArray.length);

  denominationsArray.map((denomination, index) => {

    answer[index] = ~~(money / denomination); // ~~ : 소수점 아래 버림
    money %= denomination;

  });

  return answer;
}

module.exports = problem5;
