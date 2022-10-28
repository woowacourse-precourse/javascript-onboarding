function problem7(user, friends, visitors) {
  getScores(friends, user);
}

function getRelationships(friends, user) {
  return friends.reduce((relationships, [id1, id2]) => {
    if (id2 !== user) relationships[id1] = [...(relationships[id1] || []), id2];
    if (id1 !== user) relationships[id2] = [...(relationships[id2] || []), id1];
    return relationships;
  }, {});
}

function getScores(friends, user) {
  let scores = updateOverlappingFriendScore(friends, user);
}

function updateOverlappingFriendScore(friends, user) {
  const relationships = getRelationships(friends, user);
  return relationships[user].reduce((scores, overlappedFriend) => {
    relationships[overlappedFriend].forEach((id) => {
      scores[id] = scores[id] || 0 + 10;
    });
    return scores;
  }, {});
}

function updateVisitorScore() {}
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
