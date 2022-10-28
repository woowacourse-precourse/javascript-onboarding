function sortScore(score) {
  const sortable = [];

  Object.keys(score).map((key) => sortable.push([key, score[key]]));
  sortable.sort((a, b) => {
    if (b[1] > a[1]) return +1;
    if (b[1] < a[1]) return -1;
    if (b[1] === a[1]) {
      if (a[0] > b[0]) return +1;
      if (a[0] < b[0]) return -1;
    }
  });

  return sortable.map((val) => val[0]);
}

function calculateScore(relation, visitors, user) {
  const score = {};

  relation[user].map((friend) => {
    relation[friend].map((f) => {
      if (f !== user) {
        score[f] ? (score[f] += 10) : (score[f] = 10);
      }
    });
  });

  visitors.map((visitor) => {
    if (!relation[user].includes(visitor)) {
      score[visitor] ? (score[visitor] += 1) : (score[visitor] = 1);
    }
  });

  return score;
}

function getRelationStatus(friends) {
  const relation = {};
  friends.map((friend) => {
    const [friend1, friend2] = friend;

    relation[friend1]
      ? relation[friend1].push(friend2)
      : (relation[friend1] = [friend2]);

    relation[friend2]
      ? relation[friend2].push(friend1)
      : (relation[friend2] = [friend1]);
  });

  return relation;
}

function problem7(user, friends, visitors) {
  const relation = getRelationStatus(friends);
  const score = calculateScore(relation, visitors, user);
  const answer = sortScore(score);

  return answer;
}

// console.log(
//   problem7(
//     "mrko",
//     [
//       ["shakevan", "jun"],
//       ["shakevan", "andole"],
//       ["shakevan", "mrko"],
//       ["donut", "jun"],
//       ["donut", "andole"],
//       ["donut", "mrko"],
//     ],
//     ["bedi", "bedi", "donut", "bedi", "shakevan"]
//   )
// );

module.exports = problem7;
