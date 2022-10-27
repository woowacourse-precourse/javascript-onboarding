function problem5(money) {
  var answer;
  let arr = [];
  let moneys = 0;
  let my_function = (m, n) => {
    if (m / n > 0) {
      arr.push(Math.floor(m / n));
      moneys = m % n;
    }
  };
  my_function(money, 50000);
  my_function(moneys, 10000);
  my_function(moneys, 5000);
  my_function(moneys, 1000);
  my_function(moneys, 500);
  my_function(moneys, 100);
  my_function(moneys, 50);
  my_function(moneys, 10);
  my_function(moneys, 1);

  answer = arr;
  return answer;
}

module.exports = problem5;

//기능 목록
// 1. 큰 지폐로 나눈 몫을 배열에 추가하고, 나머지를 새로운 계좌로서 사용하는 함수를 만든다.
// 2. 함수를 남은 계좌와 각 지폐를 매개변수로 넣고 호출한다.
