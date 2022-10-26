function problem7(user, friends, visitors) {
  const relation = {};
  friends.forEach(([user1, user2]) => {
    if (!relation[user1]) relation[user1] = [];
    if (!relation[user2]) relation[user2] = [];
    relation[user1].push(user2);
    relation[user2].push(user1);
  });
}

module.exports = problem7;
