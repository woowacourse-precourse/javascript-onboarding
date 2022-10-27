function problem5(money) {
  //출력값 구하기
  let coins = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  //기능목록 2-1 구현
  let answer = Array.from({ length: coins.length }, () => 0);

  //연산
  //기능목록 1-1 구현
  coins.forEach((coin, idx) => {
    answer[idx] = parseInt(money / coin);
    money = money % coin;

    //기능목록 1-2 구현
    if (money === 0) return;
  });

  return answer;
}

module.exports = problem5;
