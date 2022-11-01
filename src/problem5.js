function exchageMoney(money, unit) {
  return [parseInt(money / unit), money % unit];
}

function problem5(money) {
  const units = [50000, 10000, 5000, 1000, 500, 100, 50, 10];
  const result = [];
  let change = money;
  let count;

  units.map((unit) => {
    [count, change] = exchageMoney(change, unit);
    result.push(count);
  });
  result.push(change); // 1원 동전 개수 담기

  return result;
}

module.exports = problem5;
