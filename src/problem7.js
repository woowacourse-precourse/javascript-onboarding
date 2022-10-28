function problem7(user, friends, visitors) {
  const friendRelation = getFriendsAdjacencyList(friends);
  const userFriends = friendRelation[user];
  const friendOfFriends = getFriendOfFriends({ user, userFriends, friendRelation });

  const initScore = initRecommendationScore({ userFriends, friendRelation, friendOfFriends });
  const score = scoreVisitor({ initScore, visitors, userFriends });

  const recommendedUserList = getRecommendationUserList({ score });
  return recommendedUserList;
}

function getFriendsAdjacencyList(friends) {
  return friends.reduce((links, [user1, user2]) => {
    if (!links[user1]) links[user1] = [];
    if (!links[user2]) links[user2] = [];

    links[user1].push(user2);
    links[user2].push(user1);

    return links;
  }, {});
}

function getFriendOfFriends({ user, userFriends, friendRelation }) {
  const frinedOfFriends = userFriends.reduce((set, friend) => {
    const friends = friendRelation[friend];
    const filteredFriends = friends.filter(
      friend => friend !== user && !userFriends.includes(friend),
    );

    filteredFriends.forEach(friend => set.add(friend));
    return set;
  }, new Set());

  return [...frinedOfFriends];
}

function initRecommendationScore({ userFriends, friendRelation, friendOfFriends }) {
  return friendOfFriends.reduce((map, friend) => {
    const frineds = friendRelation[friend];
    const friendsNum = frineds.filter(friend => userFriends.includes(friend)).length;

    map.set(friend, friendsNum * 10);
    return map;
  }, new Map());
}

function scoreVisitor({ initScore, visitors, userFriends }) {
  return visitors.reduce((initScore, visitor) => {
    if (userFriends.includes(visitor)) return initScore;

    const currVisitorScore = initScore.get(visitor) || 0;
    initScore.set(visitor, currVisitorScore + 1);

    return initScore;
  }, initScore);
}

function getRecommendationUserList({ score }) {
  const sortedScore = [...score].sort(([prevKey, prevVal], [currKey, currVal]) => {
    if (prevVal !== currVal) return currVal - prevVal;

    if (prevKey < currKey) return -1;
    if (prevKey > currKey) return 1;
    if (prevKey === currKey) return 0;
  });

  const recommendedUserList = sortedScore.slice(0, 5).map(([name, score]) => name);
  return recommendedUserList;
}

module.exports = problem7;
