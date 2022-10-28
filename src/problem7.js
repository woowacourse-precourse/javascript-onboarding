function problem7(user, friends, visitors) {
  let finalScores = getScores(friends, user, visitors);
  return;
}

function getRelationships(friends, user) {
  return friends.reduce((relationships, [id1, id2]) => {
    if (id2 !== user) relationships[id1] = [...(relationships[id1] || []), id2];
    if (id1 !== user) relationships[id2] = [...(relationships[id2] || []), id1];
    return relationships;
  }, {});
}

function getScores(friends, user, visitors) {
  let [userFriends, scores] = updateOverlappingFriendScore(friends, user, []);
  return updateVisitorScore(visitors, userFriends, { ...scores });
}

function updateOverlappingFriendScore(friends, user) {
  const relationships = getRelationships(friends, user);
  // 이걸 함수로 쪼개야 함
  return [
    new Set(relationships[user]),
    relationships[user].reduce((scores, overlappedFriend) => {
      relationships[overlappedFriend].forEach((id) => {
        scores[id] = scores[id] || 0 + 10;
      });
      return scores;
    }, {}),
  ];
}

function updateVisitorScore(visitors, userFriends, scores) {
  for (let i = 0; i < visitors.length; i++) {
    if (userFriends.has(visitors[i])) continue;
    scores[visitors[i]] = scores[visitors[i]] || 0 + 1;
  }
  return scores;
}

function getTop5Ids(finalScores) {
  return Object.entries(finalScores)
    .sort((a, b) => {
      if (a[1] > b[1]) return -1;
      if (a[1] < b[1]) return 1;
      return a[0].localeCompare(b[0]);
    })
    .slice(0, 5)
    .map((ele) => ele[0]);
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
