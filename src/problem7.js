function problem7(user, friends, visitors) {
  const answer = getRecommendedUserList(user, friends, visitors);
  return answer;
}

const getFriendRelationList = (friends) => {
  const friendRelation = {};
  friends.forEach(([user1, user2]) => {
    if (!friendRelation[user1]) friendRelation[user1] = [];
    if (!friendRelation[user2]) friendRelation[user2] = [];
    friendRelation[user1].push(user2);
    friendRelation[user2].push(user1);
  });
  return friendRelation;
};

const getFriendsOfFriend = (user, friendRelation) => {
  const friendOfFriend = new Set(),
    friendOfUser = friendRelation[user];
  friendOfUser.forEach((friend) => {
    const friends = friendRelation[friend];
    friends.forEach((friend) => {
      if (friend != user && !friendOfUser.includes(friend))
        friendOfFriend.add(friend);
    });
  });
  return friendOfFriend;
};

const getScoreList = (user, friends, visitors) => {
  const friendRelation = getFriendRelationList(friends),
    friendOfFriend = getFriendsOfFriend(user, friendRelation),
    scoreList = new Map(),
    friendOfUser = friendRelation[user];
  friendOfFriend.forEach((friend) => {
    const friends = friendRelation[friend],
      numOfFriends = friends.filter((friend) =>
        friendOfUser.includes(friend)
      ).length;
    scoreList.set(friend, numOfFriends * 10);
  });
  visitors.forEach((visitor) => {
    if (!friendOfUser.includes(visitor)) {
      const score = scoreList.has(visitor) ? scoreList.get(visitor) + 1 : 1;
      scoreList.set(visitor, score);
    }
  });
  return [...scoreList];
};

const getRecommendedUserList = (user, friends, visitors) => {
  const limit = 5;
  const scoreList = getScoreList(user, friends, visitors);
  const sortedScoreList = scoreList.sort(([name1, score1], [name2, score2]) => {
    if (score1 !== score2) return score2 - score1;
    if (name1 > name2) return 1;
    if (name1 < name2) return -1;
    return 0;
  });
  const recommendedUserList = sortedScoreList
    .slice(0, limit)
    .map(([name]) => name);
  return recommendedUserList;
};

module.exports = problem7;
