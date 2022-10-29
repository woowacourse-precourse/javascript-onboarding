function problem5(money) {
  // 돈의 단위를 배열로 정렬
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];

  // 단위를 순회하며 money를 최대한 뺄 수 있는 만큼 빼고 뺀만큼 카운트 하여 배열에 푸쉬한다.
  const unitsCount = [];

  units.forEach((unit) => {
    let count = 0;
    while (money - unit >= 0) {
      money = money - unit;
      count++;
    }
    unitsCount.push(count);
  });

  // 배열을 리턴한다.
  return unitsCount;
}

module.exports = problem5;
