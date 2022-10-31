function getFriendList(user, friends) {
  const friendList = { [user]: new Set() };
  friends.forEach(([friend1, friend2]) => {
    friendList[friend1] = friendList[friend1] || new Set();
    friendList[friend1].add(friend2);
    friendList[friend2] = friendList[friend2] || new Set();
    friendList[friend2].add(friend1);
  });
  return friendList;
}

function getMutualFriendScore(user, friendList) {
  const score = {};
  friendList[user].forEach((friend) => {
    friendList[friend].forEach((mutualFriend) => {
      if (mutualFriend === user || friendList[user].has(mutualFriend)) {
        console.log(friend, mutualFriend);
        return;
      }
      score[mutualFriend] = score[mutualFriend] || 0;
      score[mutualFriend] += 10;
    });
  });
  return score;
}

function getVisitorScore(user, friendList, visitors) {
  const score = {};
  visitors.forEach((visitor) => {
    if (friendList[user].has(visitor)) {
      return;
    }
    score[visitor] = score[visitor] || 0;
    score[visitor] += 1;
  });
  return score;
}

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
