function getSecondFriends(user, adj) {
  const friends = adj[user];
  return friends.flatMap((u) => adj[u]).filter((u) => u !== user);
}

function addScore(users, scores, unit) {
  for (let u of users) {
    scores[u] = (scores[u] || 0) + unit;
  }
  return scores;
}

function problem7(user, friends, visitors) {
  let scores = {};
  const adj = {};
  for (let [u, v] of friends) {
    adj[u] = [...(adj[u] || []), v];
    adj[v] = [...(adj[v] || []), u];
  }

  const secondFriends = getSecondFriends(user, adj);
  scores = addScore(secondFriends, scores, 10);
  scores = addScore(visitors, scores, 1);

  const firstFriends = new Set(adj[user]);
  const cands = Object.keys(scores).filter((u) => !firstFriends.has(u));
  cands.sort((a, b) => {
    if (scores[a] !== scores[b]) {
      return scores[b] - scores[a];
    }

    return a - b;
  });

  return cands.slice(0, 5);
}

// console.log(
//   problem7(
//     "mrko",
//     [
//       ["donut", "andole"],
//       ["donut", "jun"],
//       ["donut", "mrko"],
//       ["shakevan", "andole"],
//       ["shakevan", "jun"],
//       ["shakevan", "mrko"],
//     ],
//     ["bedi", "bedi", "donut", "bedi", "shakevan"]
//   )
// );

module.exports = problem7;
