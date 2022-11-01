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

const getVisitorsScore = (visitors, userFriends, visitorsScoreList) => {
  visitors.forEach((visitor) => {
    visitorsScoreList[visitor]
      ? (visitorsScoreList[visitor] += 1)
      : (visitorsScoreList[visitor] = 1);
  });

  userFriends.forEach((friend) => {
    delete visitorsScoreList[friend];
  });

  return visitorsScoreList;
};

function problem7(user, friends, visitors) {
  var answer = [];
  let friendList = {};
  let userFriends = [];
  let score = {};

  friendList = makeFriendList(friends);
  userFriends = friendList[user];

  score = getFriendsScore(user, friendList, score);
  score = getVisitorsScore(visitors, userFriends, score);

  return answer;
}

module.exports = problem7;
