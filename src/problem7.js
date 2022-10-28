function problem7(user, friends, visitors) {
  const relationships = getRelationships(friends);
  let scores = getOverlappingFriends(relationships, relationships[user]);
}

function getRelationships(friends) {
  return friends.reduce((relationships, [user1, user2]) => {
    relationships[user1] = (relationships[user1] || []).push(user2);
    relationships[user2] = (relationships[user2] || []).push(user1);
    return relationships;
  }, {});
}

function getOverlappingFriends(relationships, friends) {
  return friends.reduce((acc, friend) => {
    relationships[friend];
  }, {});
}

module.exports = problem7;
