function problem7(user, friends, visitors) {
  let answer = [];
  let sortByScoreArr = [];
  let recordScoreMap = new Map();

  for (let friend of friends) {
    if (!friend.includes(user)) {
      for (let a of friend) {
        recordScoreMap.has(a)
          ? recordScoreMap.set(a, recordScoreMap.get(a) + 10)
          : recordScoreMap.set(a, 10);
      }
    } else {
      for (let a of friend) {
        recordScoreMap.set(a, 0);
      }
    }
  }

  for (let visitor of visitors) {
    if (!recordScoreMap.has(visitor)) {
      recordScoreMap.set(visitor, 1);
    } else if (recordScoreMap.get(visitor) !== 0) {
      recordScoreMap.set(visitor, recordScoreMap.get(visitor) + 1);
    }
  }

  sortByScoreArr = [...recordScoreMap].sort((r1, r2) => {
    if (r2[1] === r1[1]) {
      if (r1[0] > r2[0]) return 1;
      if (r1[0] === r2[0]) return 0;
      if (r1[0] < r2[0]) return -1;
    }
    return r2[1] - r1[1];
  });

  return answer;
}

console.log(
  problem7(
    "mrko",
    [
      ["donut", "jun"],
      ["donut", "andole"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    ["bedi", "bedi", "donut", "bedi", "shakevan"]
  )
);

module.exports = problem7;
