function problem7(user, friends, visitors) {
  const answer = [];
  const scoremap = new Map();
  const arr = new Set();
  const scoreSet = new Set();

  for (let x of friends) {
    if (x.includes(user)) {
      arr.add(x[0] === user ? x[1] : x[0]);
      continue;
    }
    scoremap.set(x[0], 0);
    scoremap.set(x[1], 0);
  }
  console.log(scoremap);
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
