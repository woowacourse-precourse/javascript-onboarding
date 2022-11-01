function makeFriendList(friends) {
  let friendList = {};

  friends.forEach((friend, index) => {
    const [id_A, id_B] = friend;

    friendList[id_A]
      ? friendList[id_A].push(id_B)
      : (friendList[id_A] = [id_B]);

    friendList[id_B]
      ? friendList[id_B].push(id_A)
      : (friendList[id_B] = [id_A]);
  });

  return friendList;
}

const getFriendsScore = (user, friendList, friendsScoreList) => {
  let userFriends = friendList[user];

  userFriends.forEach((friend) => {
    let mutualFriend = friendList[friend];

    mutualFriend.forEach((friend) => {
      friendsScoreList[friend]
        ? (friendsScoreList[friend] += 10)
        : (friendsScoreList[friend] = 10);
    });
  });

  delete friendsScoreList[user];

  return friendsScoreList;
};

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
