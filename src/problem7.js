function problem7(user, friends, visitors) {
  const relationships = getRelationships(friends);
}

function getRelationships(friends, user) {
  return friends.reduce((relationships, [id1, id2]) => {
    if (id2 !== user) relationships[id1] = [...(relationships[id1] || []), id2];
    if (id1 !== user) relationships[id2] = [...(relationships[id2] || []), id1];
    return relationships;
  }, {});
}

function getOverlappingFriends(relationships, userFriends) {
  return userFriends.reduce((acc, friend) => {
    relationships[friend];
  }, {});
}

console.log(
  getRelationships(
    [
      ["donut", "andole"],
      ["donut", "jun"],
      ["donut", "mrko"],
      ["shakevan", "andole"],
      ["shakevan", "jun"],
      ["shakevan", "mrko"],
    ],
    "mrko"
  )
);
module.exports = problem7;
