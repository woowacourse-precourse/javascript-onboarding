const makeFriendList = (friends, friendList) => {
  for (let i = 0; i < friends.length; i++) {
    const friendA = friends[i][0], friendB = friends[i][1];

    if (!friendList.hasOwnProperty(friendA))
      friendList[friendA] = new Set();
    if (!friendList.hasOwnProperty(friendB))
      friendList[friendB] = new Set();

    friendList[friendA].add(friendB);
    friendList[friendB].add(friendA);
  }
}

const problem7 = (user, friends, visitors) => {
  let friendList = {};
  let score = {};

  makeFriendList(friends, friendList);
}

module.exports = problem7;
