function problem7(user, friends, visitors) {
  const friendList = createFriendList(friends, user);
  const friendsFriendList = [];
  for (let i = 0; i < friendList.length; i++) {
    const friend = friendList[i];
    friendsFriendList.push(...createFriendList(friends, friend, friendList));
  }
}

const createScoreList = (recommendationList, friendsFriendList, visitors) => {
  const list = {};
  recommendationList.forEach((name) => {
    const friendCount = friendsFriendList.reduce(
      (count, v) => (v === name ? count + 1 : count),
      0
    );
    const visitCount = visitors.reduce(
      (count, v) => (v === name ? count + 1 : count),
      0
    );
    const score = friendCount * 10 + visitCount;
    list[name] = score;
  });
  return list;
};

const createFriendList = (relationshipList, who, friendList = []) => {
  const list = [];
  relationshipList.forEach((relationship) => {
    if (relationship.includes(who)) {
      const friendName =
        relationship[relationship.findIndex((name) => name !== who)];
      if (!friendList.includes(friendName)) list.push(friendName);
    }
  });
  return list;
};

module.exports = problem7;
