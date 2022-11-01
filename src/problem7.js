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

const getUserFriend = (user, friends) => {
  const friendsGraph = makeFriendsGraph(friends);
  const userFriends = friendsGraph.get(user);

  return userFriends;
};

const giveScoreKnowUser = (user, friends, scores) => {
  const friendsGraph = makeFriendsGraph(friends);
  const userFriends = getUserFriend(user, friends);

  for (const key of friendsGraph.keys()) {
    let score = 0;
    const keyFriends = friendsGraph.get(key);

    for (const friend of userFriends) {
      if (keyFriends.has(friend)) score += 10;
    }

    scores.set(key, score);
  }

  return scores;
};

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
