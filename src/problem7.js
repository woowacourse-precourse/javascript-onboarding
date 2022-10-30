function problem7(user, friends, visitors) {
  const scoremap = new Map();
  const arr = new Set();

  for (let x of friends) {
    if (x.includes(user)) {
      arr.add(x[0] === user ? x[1] : x[0]);
      continue;
    }
    scoremap.set(x[0], 0);
    scoremap.set(x[1], 0);
  }
  let num = 0;
  for (let x of friends) {
    if (x.includes(user)) continue;

    if (arr.has(x[0])) {
      num = scoremap.has(x[1]) ? scoremap.get(x[1]) + 10 : 10;
      scoremap.set(x[1], num);
      scoreSet.add(num);
      continue;
    }
    if (arr.has(x[1])) {
      num = scoremap.has(x[0]) ? scoremap.get(x[0]) + 10 : 10;
      scoremap.set(x[0], num);
      scoreSet.add(num);
      continue;
    }
  }

  for (let x of visitors) {
    if (arr.has(x)) continue;
    num = scoremap.has(x) ? scoremap.get(x) + 1 : 1;
    scoremap.set(x, num);
    scoreSet.add(num);
  }
}

problem7(
  "mrko",
  [
    ["donut", "andole"],
    ["donut", "jun"],
    ["donut", "mrko"],
    ["shakevan", "andole"],
    ["shakevan", "jun"],
    ["shakevan", "mrko"],
  ],
  ["bedi", "bedi", "donut", "bedi", "shakevan"]
);

module.exports = problem7;
