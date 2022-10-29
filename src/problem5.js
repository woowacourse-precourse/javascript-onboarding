function problem5(money) {
  var answer;

  let map = new Map([
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
  for (let subtract of map.keys()) {
    count = Math.floor(remain / subtract)
    remain = remain - (subtract * count);
    map.set(subtract, count);
  }

  answer = Array.from(map.values());
  return answer;
}

module.exports = problem5;
