function problem7(user, friends, visitors) {
  const relationships = getRelationships(friends);
  // 1. friends
  // 2. visitors
}

function getRelationships(friends) {
  return friends.reduce((relationships, [user1, user2]) => {
    relationships[user1] = (relationships[user1] || new Set()).add(user2);
    relationships[user2] = (relationships[user2] || new Set()).add(user1);
    return relationships;
  }, {});
}

module.exports = problem7;
