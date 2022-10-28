function problem5(money) {
  const UNITS = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  // 배열의 각 요소를 순회하며, 각 요소에 대해 calcMoney 함수를 호출하고, 반환된 배열을 누적하여 반환
  // acc의 형태 [...누적값, 화폐의 개수, 남은 액수]
  const result = UNITS.reduce(
    (acc, unit) => {
      const [unitNum, newRest] = calcMoney(acc.pop(), unit);
      return [...acc, unitNum, newRest];
    },
    [money]
  );

  // 마지막 남은 액수는 필요 없으므로 제거
  result.pop();
  return result;
}

const calcMoney = (money, unit) => {
  const unitNum = Math.floor(money / unit);
  const rest = money - unitNum * unit;
  return [unitNum, rest];
};

module.exports = problem5;
