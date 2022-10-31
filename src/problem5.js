function problem5(money) {
  let changeMap = new Map([
    [50000, 0],
    [10000, 0],
    [5000, 0],
    [1000, 0],
    [500, 0],
    [100, 0],
    [50, 0],
    [10, 0],
    [1, 0],
  ]);

  let remain = money;
  let count = 0;

  for (let change of changeMap.keys()) {
    count = Math.floor(remain / change)

    remain = remain - (change * count);

    changeMap.set(change, count);
  }

  return Array.from(changeMap.values());
}

module.exports = problem5;
