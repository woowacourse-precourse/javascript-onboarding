function problem5(money) {
  let result = [];
  let unit = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  // money를 화폐 단위별로 나눈 값을 반환하는 함수
  function takeOutMoney(unit) {
    let quotient = Math.floor(money / unit);
    money = money - quotient * unit; // money 나머지 값을 변경하는 연산
    return quotient;
  }

  for (let i = 0; i < unit.length; i++) {
    let count = takeOutMoney(unit[i]);
    result.push(count);
  }
  return result;
}

module.exports = problem5;
