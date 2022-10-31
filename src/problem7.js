function problem7(user, friends, visitors) {
  var answer;

  let friendList = new Map();
  for (let i = 0; i < friends.length; i++) {
    addFriend(friendList, friends[i][0], friends[i][1]);
    addFriend(friendList, friends[i][1], friends[i][0]);
  }

  return answer;
}

function addFriend(friendList, friend1, friend2) {
  if (friendList.get(friend1) !== undefined) {
    friendList.set(friend1, [...friendList.get(friend1), friend2]);
  } else friendList.set(friend1, [friend2]);
}

module.exports = problem7;
