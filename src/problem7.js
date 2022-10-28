function problem7(user, friends, visitors) {
  const friendRelation = getFriendsAdjacencyList(friends);
  const userFriends = friendRelation[user] ?? [];
  const userFriendsOfFriends = getFriendOfFriends({ user, userFriends, friendRelation });

  const initScore = initRecommendationScore({ userFriends, friendRelation, userFriendsOfFriends });
  const score = scoreVisitor({ initScore, visitors, userFriends });

  const recommendedUserList = getRecommendationUserList(score);
  return recommendedUserList;
}

function getFriendsAdjacencyList(friends) {
  return friends.reduce((friendsAdjList, [user1, user2]) => {
    if (!friendsAdjList[user1]) friendsAdjList[user1] = [];
    if (!friendsAdjList[user2]) friendsAdjList[user2] = [];

    friendsAdjList[user1].push(user2);
    friendsAdjList[user2].push(user1);

    return friendsAdjList;
  }, {});
}

function getFriendOfFriends({ user, userFriends, friendRelation }) {
  const frinedOfFriends = userFriends.reduce((friendOfFriendsSet, friend) => {
    const friends = friendRelation[friend];
    const filteredFriends = friends.filter(
      friend => friend !== user && !userFriends.includes(friend),
    );

    filteredFriends.forEach(friend => friendOfFriendsSet.add(friend));
    return friendOfFriendsSet;
  }, new Set());

  return [...frinedOfFriends];
}

function initRecommendationScore({ userFriends, friendRelation, userFriendsOfFriends }) {
  return userFriendsOfFriends.reduce((recommendationScore, friend) => {
    const frineds = friendRelation[friend];
    const friendsNum = frineds.filter(friend => userFriends.includes(friend)).length;

    recommendationScore.set(friend, friendsNum * 10);
    return recommendationScore;
  }, new Map());
}

function scoreVisitor({ initScore, visitors, userFriends }) {
  return visitors.reduce((score, visitor) => {
    if (userFriends.includes(visitor)) return score;

    const currVisitorScore = score.get(visitor) || 0;
    score.set(visitor, currVisitorScore + 1);

    return score;
  }, initScore);
}

function getRecommendationUserList(score) {
  const sortedScore = [...score].sort(([prevName, prevScore], [currName, currScore]) => {
    if (prevScore !== currScore) return currScore - prevScore;

    if (prevName < currName) return -1;
    if (prevName > currName) return 1;
    if (prevName === currName) return 0;
  });

  const recommendedUserList = sortedScore.slice(0, 5).map(([name]) => name);
  return recommendedUserList;
}

module.exports = problem7;
