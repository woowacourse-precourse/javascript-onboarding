/*
 * 기능 분석
 * [x] 화폐에 대한 기준을 적은 static 배열 선언
 * [x] 입력받은 money에 대한 화폐의 수가 가장 적게 하는 기능
 */

const STATIC_MONEY = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1]

function problem5(money) {
  var answer = [];

  /*
   * 문제의 요점은 가장 적은 수의 지폐와 동전을 받는 경우를 찾는 것이다.
   * 가장 큰 화폐단위부터 나누어진 값을 저장하고 
   * 나누고 남은 나머지 money값을 다음으로 큰 화폐단위로 나누고 값을 저장한다.
   * 위의 방식을 반복하여 answer배열에 저장한다.
   */
  //입력받은 money에 대한 화폐의 수가 가장 적게 하는 함수
  const calc = (money, i) => {
    answer.push(Math.floor(money / STATIC_MONEY[i]));
    money = money % STATIC_MONEY[i];
    return STATIC_MONEY[i + 1] === undefined ? 0 : calc(money, i + 1);
  };

  calc(money, 0, answer);

  return answer;
}

module.exports = problem5;
