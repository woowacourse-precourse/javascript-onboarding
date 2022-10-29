function problem7(user, friends, visitors) {
  const friendList = createFriendList(friends, user);
  const friendsFriendList = [];
  for (let i = 0; i < friendList.length; i++) {
    const friend = friendList[i];
    friendsFriendList.push(...createFriendList(friends, friend, friendList));
  }
}

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
