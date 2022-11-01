const makeFriendsGraph = (friends) => {
  const friendsGraph = new Map();

  friends.forEach(([user1, user2]) => {
    if (!friendsGraph.has(user1)) {
      friendsGraph.set(user1, new Set());
    }
    friendsGraph.get(user1).add(user2);

    if (!friendsGraph.has(user2)) {
      friendsGraph.set(user2, new Set());
    }
    friendsGraph.get(user2).add(user1);
  });

  return friendsGraph;
};

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
