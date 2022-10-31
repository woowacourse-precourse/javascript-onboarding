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

function problem7(user, friends, visitors) {
  var answer;
  return answer;
}

module.exports = problem7;
