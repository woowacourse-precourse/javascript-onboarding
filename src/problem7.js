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

const giveScoreVisitors = (visitors, scores) => {
  for (const visitor of visitors) {
    if (!scores.has(visitor)) {
      scores.set(visitor, 0);
    }
    scores.set(visitor, scores.get(visitor) + 1);
  }

  return scores;
};

const getScores = (user, friends, visitors) => {
  const scores = new Map();
  giveScoreKnowUser(user, friends, scores);
  giveScoreVisitors(visitors, scores);

  return scores;
};

const sortUser = (userList) => {
  const sortedUserList = userList
    .sort((v1, v2) => {
      if (v2[1] - v1[1] === 0) return v1[0] > v2[0] ? 1 : -1;
      return v2[1] - v1[1];
    })
    .map((v) => v[0]);

  return sortedUserList.length > 5 ? sortedUserList.slice(5) : sortedUserList;
};

const getMostScoreUser = (user, friends, visitors) => {
  const scores = getScores(user, friends, visitors);
  const usersFriends = getUserFriend(user, friends);
  const userList = [];

  for (const [key, value] of scores) {
    if (key === user) continue;

    if (usersFriends.has(key)) continue;

    userList.push([key, value]);
  }

  return sortUser(userList);
};

function problem7(user, friends, visitors) {
  return getMostScoreUser(user, friends, visitors);
}

module.exports = problem7;
