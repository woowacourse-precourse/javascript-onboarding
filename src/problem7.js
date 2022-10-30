function problem7(user, friends, visitors) {
  var answer;
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

module.exports = problem7;
